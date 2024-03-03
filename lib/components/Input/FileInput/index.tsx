import { ChangeEvent, SVGProps, useState } from "react";
import File from "@/icons/File";
import styles from "./styles.module.css";
import TextInput, { TextInputProps } from "../TextInput";
import "@/styles.css";

export enum FileInputType {
  ALL_FILES = "ALL_FILES",
  IMAGE_AND_SRC = "IMAGE_AND_SRC",
  ONLY_IMAGE = "ONLY_IMAGE",
  ONLY_IMAGE_SRC = "ONLY_IMAGE_SRC",
}

export type FileInputProps = {
  type?: FileInputType;
  iconProps?: SVGProps<SVGSVGElement>;
} & TextInputProps;

const FileInput: React.FC<FileInputProps> = ({ type, iconProps, ...props }) => {
  // TODO
  // const [file, setFile] = useState<File | null>(null);
  const [filePath, setFilePath] = useState<string>("");
  const [fileSrc, setFileSrc] = useState<any>();
  const [fileType, setFileType] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    // setFile(file);
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
            <label htmlFor="textInput">
              <TextInput
                type="text"
                id="textInput"
                value={filePath}
                onChange={handleFilePathChange as any}
                {...props}
              />
            </label>
            <label
              id="allFileLabel"
              className={`${styles.buttonFileLabel}`}
              htmlFor="buttonFile"
            >
              <input
                type="file"
                id="buttonFile"
                className={`${styles.buttonFile}`}
                onChange={handleFileChange}
                {...props}
              />
              <span className={styles.button}>Select file</span>
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
            {...props}
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
            <TextInput
              type="text"
              id="textInput"
              value={filePath}
              onChange={handleFilePathChange as any}
              {...props}
            />
          </label>
        </div>
      );
    case FileInputType.ALL_FILES:
    default:
      return (
        <label
          id="buttonFileLabel"
          className={`${styles.buttonFileLabel}`}
          htmlFor="buttonFile"
        >
          <input
            type="file"
            id="buttonFile"
            className={`${styles.buttonFile}`}
            onChange={handleFileChange}
            {...props}
          />
          <span className={styles.button}>Select file...</span>
        </label>
      );
  }
};

export default FileInput;
