import React, { useEffect, useRef, useState } from "react";
import { Modal, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const ImageComparisonModal = ({ image1, image2, open, close }) => {
  const { t } = useTranslation();
  const [ready, setReady] = useState(false);
  const canvasRef = useRef();
  const [isHorizontal, setHorizontal] = useState(false);

  const getLocaleString = (key) => t(key);

  useEffect(() => {
    if (!ready) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (open) {
      const img1 = new Image();
      const img2 = new Image();

      img1.src = image1;
      img2.src = image2;

      Promise.all([
        new Promise((resolve) => (img1.onload = resolve)),
        new Promise((resolve) => (img2.onload = resolve)),
      ])
        .then(() => {
          const width = Math.max(img1.width, img2.width);
          const height = Math.max(img1.height, img2.height);
          canvas.width = width;
          canvas.height = height;
          width > height ? setHorizontal(true) : setHorizontal(false);
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img1, 0, 0);
          const imageData1 = ctx.getImageData(0, 0, width, height);

          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img2, 0, 0);
          const imageData2 = ctx.getImageData(0, 0, width, height);

          // Calculate RGB differences
          const diffData = ctx.createImageData(width, height);
          for (let i = 0; i < diffData.data.length; i += 4) {
            diffData.data[i] = Math.abs(
              imageData1.data[i] - imageData2.data[i],
            ); // Red
            diffData.data[i + 1] = Math.abs(
              imageData1.data[i + 1] - imageData2.data[i + 1],
            ); // Green
            diffData.data[i + 2] = Math.abs(
              imageData1.data[i + 2] - imageData2.data[i + 2],
            ); // Blue
            diffData.data[i + 3] = 255; // Alpha
          }
          ctx.putImageData(diffData, 0, 0);
        })
        .catch((error) => {
          console.error("Error loading images:", error);
        });
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [image1, image2, open, ready]);

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="flex justify-center items-center"
    >
      <Box className="items-center border-2 border-b-blue-400 bg-grey w-[60vw] h-[70vh]">
        <div className="flex justify-between w-full h-[50px] bg-[#1976d2]">
          <Typography
            id="modal-title"
            variant="h6"
            className="p-2.5 text-white"
          >
            {getLocaleString("comparison_modal_title")}
          </Typography>
          <CloseIcon
            className="cursor-pointer my-auto mx-4 text-white"
            onClick={close}
          />
        </div>
        <div className="w-full h-[calc(100%-50px)] flex items-center justify-center">
          <canvas
            ref={(ref) => {
              canvasRef.current = ref;
              setReady(true);
            }}
            className={`${
              isHorizontal
                ? "w-full max-h-full"
                : "max-w-full h-full"
            } m-auto`}
          />
        </div>
      </Box>
    </Modal>
  );
};

export default ImageComparisonModal;
