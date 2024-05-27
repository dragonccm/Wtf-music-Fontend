import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

function AudioUploader({ onUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith("audio/")) {
      onUpload(file);
    } else {
      alert("Vui lòng tải lên một tệp tin âm thanh.");
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={isDragActive ? "active" : "avt_group"}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Thả âm thanh vào đây...</p> : <FontAwesomeIcon icon={faUserPen} />}
    </div>
  );
}

export default AudioUploader;