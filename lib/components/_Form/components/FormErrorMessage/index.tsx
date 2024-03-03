import ErrorMessage from "@/components/ErrorMessage";
import { useFormContext } from "react-hook-form";
import "@/styles.css";

export type FormErrorMessageProps = {
  name: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  name,
  ...props
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return errors[name] ? (
    <ErrorMessage
      {...props}
      style={{
        position: "absolute",
        bottom: "-1rem",
        ...props.style,
      }}
    >
      {errors[name]?.message?.toString()}
    </ErrorMessage>
  ) : (
    <></>
  );
};

export default FormErrorMessage;
