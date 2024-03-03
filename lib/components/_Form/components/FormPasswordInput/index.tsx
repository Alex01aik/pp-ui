import { SVGProps } from "react";
import PasswordInput from "@/components/Input/PasswordInput";
import FormErrorMessage from "../FormErrorMessage";
import { Controller, useFormContext } from "react-hook-form";
import { TextInputProps } from "@/components/Input/TextInput";
import styles from "./styles.module.css";

export type FormPasswordInputProps = {
  name: string;
  iconProps?: SVGProps<SVGSVGElement>;
} & TextInputProps;

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
