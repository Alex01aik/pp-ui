import Select, { SelectProps } from "@/components/Select";
import FormErrorMessage from "../FormErrorMessage";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import "@/styles.css";

export type FormSelectProps = {
  name: string;
} & SelectProps;

const FormSelect: React.FC<FormSelectProps> = (props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={(renderProps) => (
        <div className={`${styles.selectWrapper}`}>
          <Select
            {...props}
            selectedOptions={renderProps.field.value ?? []}
            onSelect={renderProps.field.onChange}
          />
          <FormErrorMessage name={props.name} />
        </div>
      )}
    />
  );
};

export default FormSelect;
