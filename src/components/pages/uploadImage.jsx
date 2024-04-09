import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function ImageUploader({ onUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    onUpload(URL.createObjectURL(file));
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={isDragActive ? "active" : "avt_group"}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Thả ảnh vào đây...</p>
      ) : (
        <p>Kéo và thả ảnh hoặc nhấp để chọn ảnh.</p>
      )}
    </div>
  );
}

export default ImageUploader;