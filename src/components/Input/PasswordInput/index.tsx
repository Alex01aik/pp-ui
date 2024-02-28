import { SVGProps, useState } from "react";
import EyeClose from "@/icons/EyeClose";
import EyeOpen from "@/icons/EyeOpen";
import styles from "./styles.module.css";

export type PasswordInputProps = {
  iconProps?: SVGProps<SVGSVGElement>;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const PasswordInput: React.FC<PasswordInputProps> = ({
  iconProps,
  ...props
}) => {
  const [isHide, toggleIsHide] = useState<boolean>(true);

  return (
    <div className={styles.passwordInput}>
      {isHide ? (
        <>
          <input {...props} type="password" />
          <EyeOpen
            {...iconProps}
            className={`${styles.eye} ${iconProps?.className}`}
            onClick={() => toggleIsHide((prev) => !prev)}
          />
        </>
      ) : (
        <>
          <input {...props} type="text" />
          <EyeClose
            {...iconProps}
            className={`${styles.eye} ${iconProps?.className}`}
            onClick={() => toggleIsHide((prev) => !prev)}
          />
        </>
      )}
    </div>
  );
};

export default PasswordInput;
