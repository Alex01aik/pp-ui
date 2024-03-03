import FormErrorMessage from "../FormErrorMessage";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import TextInput, { TextInputProps } from "@/components/Input/TextInput";

export type FormInputProps = {
  name: string;
} & TextInputProps;

const FormInput: React.FC<FormInputProps> = (props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={(renderProps) => (
        <div className={`${styles.inputWrapper}`}>
          <TextInput
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

export default FormInput;
