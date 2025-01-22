import React from "react";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal, Typography, Divider } from "@mui/material";
import { UserRoles } from "../../../constants";
import CheckIcon from "@mui/icons-material/Check";
import { CloseButtonBox, FormContainer } from "../style";

const ViewPrescriptionModal = ({ data, open, close }) => {
  const { t } = useTranslation();

  const status = JSON.parse(data?.approvalStatus || "{}");
  const comments = JSON.parse(data?.comment || "{}");
  const content = JSON.parse(data?.content || "{}");

  return (
    <Modal open={open} onClose={close}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <FormContainer sx={{ width: "75% !important" }}>
          <Box>
            <Typography mb="0.5rem" fontSize="1.5rem" color="primary">
              {t("modal_title_label")}: {data?.title}
            </Typography>
            <Divider />
            <Box>
              <Box>
                <Typography my="0.5rem" fontSize="1.5rem" color="primary">
                  {t("modal_original_content_label")}
                </Typography>
                <Box className="min-h-6">{content?.updated?.text}</Box>
              </Box>
              <Box>
                <Typography my="0.5rem" fontSize="1.5rem" color="primary">
                  {t("modal_comment_label")}
                </Typography>
                <Box className="min-h-6">
                  {Object.entries(comments).map(([key, value], index) => (
                    <Box key={index}>
                      <div>
                        <strong>{key} : </strong>
                        {value}
                      </div>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box mt={2}>
                <Divider />
                <Typography my="0.5rem" fontSize="1.5rem" color="primary">
                  {t("document_approve_status")}
                </Typography>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Box mr={1}>
                      <strong>{t("Master")} : </strong>
                    </Box>
                    {status[UserRoles.MASTER] === 1 ? (
                      <CheckIcon sx={{ fontSize: 16 }} />
                    ) : (
                      <CloseIcon sx={{ fontSize: 16 }} />
                    )}
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box mr={1}>
                      <strong>{t("Sub Master")} : </strong>
                    </Box>
                    {status[UserRoles.SUB_MASTER] === 1 ? (
                      <CheckIcon sx={{ fontSize: 16 }} />
                    ) : (
                      <CloseIcon sx={{ fontSize: 16 }} />
                    )}
                  </Box>
                  <CloseButtonBox>
                    <CloseIcon onClick={close} />
                  </CloseButtonBox>
                </Box>
              </Box>
            </Box>
          </Box>
        </FormContainer>
      </Box>
    </Modal>
  );
};

export default ViewPrescriptionModal;
