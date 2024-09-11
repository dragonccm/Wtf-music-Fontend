import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons";
import { AssemblyAI } from 'assemblyai'

function AudioUploader({ onUpload }) {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith("audio/")) {
      onUpload(file);
    } else {
      alert("Vui lòng tải lên một tệp tin âm thanh.");
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={isDragActive ? "active" : "audio_group"}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Thả âm thanh vào đây...</p> : <FontAwesomeIcon icon={faFileAudio} />}
    </div>
  );
}

export default AudioUploader;