import styles from "./styles.module.css";

export type ButtonProps = {} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={`${styles.button} ${props.className}`}>
      Button
    </button>
  );
};

export default Button;
