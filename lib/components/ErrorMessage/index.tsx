import styles from "./styles.module.css";
import "@/styles.css";

export type ErrorMessageProps = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  return (
    <span {...props} className={`${styles.errorMessage} ${props.className}`}>
      {props.children}
    </span>
  );
};

export default ErrorMessage;
