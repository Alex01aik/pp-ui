import { SVGProps } from "react";
import PasswordInput from "@/components/Input/PasswordInput";
import FormErrorMessage from "../FormErrorMessage";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

export type FormPasswordInputProps = {
  name: string;
  iconProps?: SVGProps<SVGSVGElement>;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  iconProps,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={(renderProps) => (
        <div className={`${styles.passwordInputWrapper}`}>
          <PasswordInput
            {...props}
            value={renderProps.field.value ?? ""}
            onChange={renderProps.field.onChange}
          />
          <FormErrorMessage name={props.name} />
        </div>
      )}
    />
  );
};

export default FormPasswordInput;
