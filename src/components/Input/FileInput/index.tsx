import { ChangeEvent, SVGProps, useState } from "react";
import File from "@/icons/File";
import styles from "./styles.module.css";

export enum FileInputType {
  ALL_FILES = "ALL_FILES",
  IMAGE_AND_SRC = "IMAGE_AND_SRC",
  ONLY_IMAGE = "ONLY_IMAGE",
  ONLY_IMAGE_SRC = "ONLY_IMAGE_SRC",
}

export type FileInputProps = {
  type?: FileInputType;
  iconProps?: SVGProps<SVGSVGElement>;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const FileInput: React.FC<FileInputProps> = ({ type, iconProps, ...props }) => {
  const [file, setFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState<string>("");
  const [fileSrc, setFileSrc] = useState<any>();
  const [fileType, setFileType] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFile(file);
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setFileSrc(e.target?.result);
        setFileType(file.type);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFilePathChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilePath(event.target.value);
    setFileSrc(event.target.value);
  };

  switch (type) {
    case FileInputType.IMAGE_AND_SRC:
      return (
        <div className={`${styles.fileInputWrapper}`}>
          <div className={`${styles.fileImg}`}>
            {fileType && fileSrc ? (
              fileType.startsWith("image/") ? (
                <img src={fileSrc} alt="img" width={64} height={64} />
              ) : (
                <iframe title="PDF Preview" src={fileSrc}></iframe>
              )
            ) : (
              <File width={64} height={64} />
            )}
          </div>
          <div className={`${styles.fileInputs}`}>
            <label className={`${styles.fileInputLabel}`} htmlFor="textInput">
              <input
                type="text"
                id="textInput"
                className={`${styles.textInput}`}
                value={filePath}
                onChange={handleFilePathChange}
              />
            </label>
            <label className={`${styles.fileInputLabel}`} htmlFor="fileInput">
              <input
                type="file"
                id="fileInput"
                className={`${styles.fileInput}`}
                onChange={handleFileChange}
              />
              <span className={`${styles.fileInputTitle}`}>Select file</span>
            </label>
          </div>
        </div>
      );
    case FileInputType.ONLY_IMAGE:
      return (
        <label className={`${styles.imageForm}`} htmlFor="fileInput">
          <input
            type="file"
            id="fileInput"
            className={`${styles.fileInput}`}
            onChange={handleFileChange}
          />
          {fileSrc ? (
            <img src={fileSrc} alt="img" width={64} height={64} />
          ) : (
            <File width={64} height={64} />
          )}
        </label>
      );
    case FileInputType.ONLY_IMAGE_SRC:
      return (
        <div className={`${styles.onlyImageSrc}`}>
          <div className={`${styles.onlyImageForm}`}>
            {fileSrc ? (
              <img src={fileSrc} alt="img" width={82} height={82} />
            ) : (
              <File width={82} height={82} />
            )}
          </div>
          <label className={`${styles.fileInputLabel}`} htmlFor="textInput">
            <input
              type="text"
              id="textInput"
              className={`${styles.textInput}`}
              value={filePath}
              onChange={handleFilePathChange}
            />
          </label>
        </div>
      );
    case FileInputType.ALL_FILES:
    default:
      return (
        <label
          id="allFileLabel"
          className={`${styles.allFileLabel}`}
          htmlFor="allFile"
        >
          <input
            type="file"
            id="allFile"
            className={`${styles.allFile}`}
            onChange={handleFileChange}
          />
          <span>Select file...</span>
        </label>
      );
  }
};

export default FileInput;
