import CodeInput, { CodeInputProps } from "@/components/Input/CodeInput";
import FormErrorMessage from "../FormErrorMessage";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import "@/styles.css";

export type FormCodeInputProps = {
  name: string;
} & CodeInputProps;

const FormCodeInput: React.FC<FormCodeInputProps> = (props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={(renderProps) => (
        <div className={`${styles.codeInputWrapper}`}>
          <CodeInput
            value={renderProps.field.value}
            onChange={renderProps.field.onChange}
            {...props}
          />
          <FormErrorMessage name={props.name} />
        </div>
      )}
    />
  );
};

export default FormCodeInput;
