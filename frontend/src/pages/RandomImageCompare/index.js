import React, { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import ImageComparisonModal from "../../components/Modal/ImageComparisonModal";
import { useTranslation } from "react-i18next";
import "./style.css";

const RandomImageCompare = () => {
  const { t } = useTranslation();
  const image1Ref = useRef("");
  const image2Ref = useRef("");
  const [isOpenModal, setOpenModal] = useState(false);

  const getLocaleString = (key) => t(key);
  const handleImageUpload = (file, id) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const imageName = file.name;

      if (id === 1) {
        image1Ref.current = imageUrl;
        document.getElementById("image1").src = imageUrl;
        document.getElementById("image_name1").textContent = imageName;
      } else if (id === 2) {
        image2Ref.current = imageUrl;
        document.getElementById("image2").src = imageUrl;
        document.getElementById("image_name2").textContent = imageName;
      }
    }
  };

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    handleImageUpload(file, id);
  };

  const handleCompareImage = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Drag and drop handlers
  const handleDrop = (e, id) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageUpload(file, id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Box className="h-full">
      <Box className="flex mx-7 my-5 items-center justify-between">
        <Typography variant="h5">
          {getLocaleString("image_comparison_page_title")}
        </Typography>
        <button
          className="bg-blue-400 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg"
          onClick={handleCompareImage}
        >
          {getLocaleString("common_compare")}
        </button>
      </Box>
      <Box className="mx-7 bg-gray-100 h-[calc(100%-6rem)]">
        <div className="p-3 h-full">
          <Box className="flex justify-between mb-4 h-10">
            <Box className="flex items-center h-full">
              <label
                  className="enabled-button px-4 py-2"
                  htmlFor="image_selector_1"
              >
                {getLocaleString("common_select_file")}
              </label>
              <input
                  type="file"
                  className="hidden"
                  id="image_selector_1"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 1)}
              />
              <Typography marginX={2} id="image_name1" />
            </Box>
            <Box className="flex items-center">
              <Typography marginX={2} id="image_name2" />
              <label
                  className="enabled-button px-4 py-2"
                  htmlFor="image_selector_2"
              >
                {getLocaleString("common_select_file")}
              </label>
              <input
                  type="file"
                  className="hidden"
                  id="image_selector_2"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 2)}
              />
            </Box>
          </Box>
          <Box className="flex gap-1 h-[calc(100vh-15rem)] justify-between items-center p-0.5 my-auto">
            <div
              onDrop={(e) => handleDrop(e, 1)}
              onDragOver={handleDragOver}
              className="w-[50%] max-h-[calc(100vh-15rem)] min-h-[10rem] border-2 border-dashed border-gray-300 flex items-center justify-center"
            >
              <img
                id="image1"
                className="max-h-full object-contain"
                alt="Upload file 1"
              />
            </div>
            <div
              onDrop={(e) => handleDrop(e, 2)}
              onDragOver={handleDragOver}
              className="w-[50%] max-h-[calc(100vh-15rem)] min-h-[10rem] border-2 border-dashed border-gray-300 flex items-center justify-center"
            >
              <img
                id="image2"
                className="max-h-full object-contain"
                alt="Upload file 2"
              />
            </div>
          </Box>
        </div>
      </Box>
      {isOpenModal && (
        <ImageComparisonModal
          image1={image1Ref.current}
          image2={image2Ref.current}
          open={isOpenModal}
          close={handleCloseModal}
        />
      )}
    </Box>
  );
};
export default RandomImageCompare;
