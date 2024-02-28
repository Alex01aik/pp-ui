import { SVGProps } from "react";

const File: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 0H100V100H0V40L10 30V90H90V10H30L40 0Z"
        fill={props.fill ?? "gray"}
      />
      <path d="M47 47L7 47L47 7L47 47Z" fill={props.fill ?? "gray"} />
      <rect
        x="40.2505"
        width="10"
        height="56.8251"
        transform="rotate(45 40.2505 0)"
        fill={props.fill ?? "gray"}
      />
    </svg>
  );
};

export default File;
