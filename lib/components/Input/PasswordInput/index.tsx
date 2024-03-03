import { SVGProps, useState } from "react";
import EyeClose from "@/icons/EyeClose";
import EyeOpen from "@/icons/EyeOpen";
import styles from "./styles.module.css";
import TextInput, { TextInputProps } from "../TextInput";
import "@/styles.css";

export type PasswordInputProps = {
  iconProps?: SVGProps<SVGSVGElement>;
} & TextInputProps;

const PasswordInput: React.FC<PasswordInputProps> = ({
  iconProps,
  ...props
}) => {
  const [isHide, toggleIsHide] = useState<boolean>(true);

  return (
    <div className={styles.passwordInput}>
      <TextInput {...props} type={isHide ? "password" : "text"} />
      {isHide ? (
        <EyeOpen
          {...iconProps}
          className={`${styles.eye} ${iconProps?.className}`}
          onClick={() => toggleIsHide((prev) => !prev)}
        />
      ) : (
        <EyeClose
          {...iconProps}
          className={`${styles.eye} ${iconProps?.className}`}
          onClick={() => toggleIsHide((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default PasswordInput;
