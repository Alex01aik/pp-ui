import { SVGProps } from "react";
import LoaderIcon from "@/icons/Loader";
import styles from "./styles.module.css";

export type LoaderProps = SVGProps<SVGSVGElement> & {};

const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <LoaderIcon {...props} className={`${styles.loader} ${props.className}`} />
  );
};

export default Loader;
