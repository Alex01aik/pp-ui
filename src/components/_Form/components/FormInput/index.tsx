import FormErrorMessage from "../FormErrorMessage";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";

export type FormInputProps = {
  name: string;
  field?: "input" | "textarea";
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

const FormInput: React.FC<FormInputProps> = (props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={(renderProps) => (
        <div className={`${styles.inputWrapper}`}>
          {props.field === "textarea" ? (
            <textarea
              {...props}
              value={renderProps.field.value ?? ""}
              onChange={renderProps.field.onChange}
            />
          ) : (
            <input
              {...props}
              value={renderProps.field.value ?? ""}
              onChange={renderProps.field.onChange}
            />
          )}
          <FormErrorMessage name={props.name} />
        </div>
      )}
    />
  );
};

export default FormInput;
