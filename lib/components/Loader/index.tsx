import { SVGProps } from "react";
import styles from "./styles.module.css";
import LoaderIcon from "@/icons/Loader";
import "@/styles.css";

export type LoaderProps = SVGProps<SVGSVGElement> & {};

const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <LoaderIcon {...props} className={`${styles.loader} ${props.className}`} />
  );
};

export default Loader;
