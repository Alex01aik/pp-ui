import { SVGProps } from "react";

const Copy: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_47_48)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 10V70H90V10H30ZM24 0C21.7909 0 20 1.79086 20 4V76C20 78.2091 21.7909 80 24 80H96C98.2091 80 100 78.2091 100 76V4C100 1.79086 98.2091 0 96 0H24Z"
          fill={props.fill ?? "gray"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 30V90H70V30H10ZM4 20C1.79086 20 0 21.7909 0 24V96C0 98.2091 1.79086 100 4 100H76C78.2091 100 80 98.2091 80 96V24C80 21.7909 78.2091 20 76 20H4Z"
          fill={props.fill ?? "gray"}
        />
      </g>
      <defs>
        <clipPath id="clip0_47_48">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Copy;
