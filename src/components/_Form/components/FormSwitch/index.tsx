import Switch from "@/components/Switch";
import { Controller, useFormContext } from "react-hook-form";
import { SwitchProps } from "@/components/Switch/props";

export type FormSwitchProps = {
  name: string;
} & SwitchProps;

const FormSwitch: React.FC<FormSwitchProps> = (props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={props.name}
      control={control}
      render={(renderProps) => (
        <Switch
          value={renderProps.field.value ?? props.value ?? false}
          onChange={renderProps.field.onChange}
          {...props}
        />
      )}
    />
  );
};

export default FormSwitch;
