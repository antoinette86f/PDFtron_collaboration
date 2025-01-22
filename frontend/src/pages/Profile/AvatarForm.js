import React, { useEffect, useState, createRef } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Typography } from "@mui/material";
import { useAuthState } from "../../hooks/redux";
import { ToastService, uploadAvatar, removeAvatar } from "../../services";
import { ImageRemoveButton, ImageSaveButton } from "./style";
import { startLoading, finishLoading } from "../../redux/actions";
import ProfileImageCropper from "./ProfileImageCropper";
import { AuthService } from "../../services";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch } from "react-redux";
import { SpinnerContainer } from "../../components/SpinnerContainer";

const AvatarForm  = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { account } = useAuthState();
  const [image, setImage] = useState(null);
  const [isChangedAvatar, setIsChangedAvatar] = useState(false);
  const [isOpenImageCropper, setIsOpenImageCropper] = useState(false);
  const [changedImage, setChangedImage] = useState(null);
  const inputFileRef = createRef(null);
  const initialUrl = process.env.REACT_APP_API_SERVER.replace("api", "null");
  const formData = new FormData();

  useEffect(() => {
    setImage(process.env.REACT_APP_API_SERVER.replace("api", account.avatarUrl));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const handleUploadAvatar = async () => {
    dispatch(startLoading());
    if (changedImage) {
      const isValid = changedImage?.type.startsWith("image/");
      if (isValid) {
        const [header, base64] = image.split(",");

        // Decode the Base64 string
        const byteCharacters = atob(base64);
        const byteNumbers = new Uint8Array(byteCharacters.length);

        // Create a byte array
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        // Create a Blob from the byte array
        const blob = new Blob([byteNumbers], {
          type: header.split(":")[1].split(";")[0],
        });

        // Create a File from the Blob
        const file = new File([blob], changedImage.name, { type: blob.type });

        formData.append("file", file);
        await uploadAvatar(account.id, formData)
          .then((res) => {
            ToastService.success(t('toast_upload_avatar_success'));
            setIsChangedAvatar(false);
          });
        AuthService.getAccount();
      }
    } else if (!changedImage) {
      await removeAvatar(account.id).then((res) => {
        ToastService.success(t(res.message));
      });
      setIsChangedAvatar(false);
      AuthService.getAccount();
    }
    dispatch(finishLoading());
    setChangedImage(null);
  }

  const handleRemoveAvatar = async () => {
    if (isChangedAvatar) {
      setImage(process.env.REACT_APP_API_SERVER.replace("api", account.avatarUrl));
      setIsChangedAvatar(false);
    } else {
      setImage(initialUrl);
      setIsChangedAvatar(true);
    }
    setChangedImage(null);
  }

  const handleOnClick = async () => {
    inputFileRef.current.click();
  };

  const handleCropImage = (img) => {
    setImage(img);
    setIsChangedAvatar(true);
    handleCloseImageCropper();
  };

  const handleOnChangeImage = async (event) => {
    setChangedImage(event.target?.files?.[0]);
    setIsOpenImageCropper(true);
  };

  const handleCloseImageCropper = () => {
    inputFileRef.current.value = null;
    setIsOpenImageCropper(false);
  };

  return(
    <>
      <form id="avatar-form" method="post" encType="multipart/form-data" className="relative">
        <Avatar
          alt={account.name}
          src={image}
          className="avatar border-[5px] border-[#42A5F5]"
          onClick={handleOnClick}
        />
        <SpinnerContainer />
        {
          image !== initialUrl &&
          <ImageRemoveButton
            variant="contained"
            onClick={handleRemoveAvatar}
          >
            <CloseIcon />
          </ImageRemoveButton>
        }
        {
          isChangedAvatar &&
          <ImageSaveButton
            variant="contained"
            onClick={handleUploadAvatar}
          >
            <SaveIcon fontSize="medium" />
          </ImageSaveButton>
        }
        <input
          ref={inputFileRef}
          accept="image/*"
          hidden
          id="avatar-image-upload"
          type="file"
          onChange={handleOnChangeImage}
        />
        <ProfileImageCropper
          open={isOpenImageCropper}
          onClose={handleCloseImageCropper}
          imageToCrop={changedImage ? URL.createObjectURL(changedImage) : ""}
          croppedImage={handleCropImage}
        />
      </form>
      <Typography className="name">{account.name}</Typography>
      <Typography className="email">{account.email}</Typography>
      <Typography className="userId">{account.userId}</Typography>
    </>
  )
}

export default AvatarForm;