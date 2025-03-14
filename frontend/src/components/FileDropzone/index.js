import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box } from "@mui/material";

const FileDropzone = ({ children, onChange }) => {
  const handleDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onChange(acceptedFiles[0]);
      }
    },
    [onChange],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "text/plain": [".txt"],
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
    onDrop: handleDrop,
    multiple: false,
  });

  return (
    <Box {...getRootProps({})}>
      <input {...getInputProps()} />
      {children}
    </Box>
  );
};

const EnhancedFileDropzone = React.memo(FileDropzone);

export default EnhancedFileDropzone;
