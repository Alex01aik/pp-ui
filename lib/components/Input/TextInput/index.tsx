import styles from "./styles.module.css";
import "@/styles.css";

export type TextInputProps = {
  field?: "input" | "textarea";
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

const TextInput: React.FC<TextInputProps> = (props) => {
  return props.field === "textarea" ? (
    <textarea {...props} className={`${props.className} ${styles.input}`} />
  ) : (
    <input {...props} className={`${props.className} ${styles.input}`} />
  );
};

export default TextInput;
