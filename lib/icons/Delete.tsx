import { SVGProps } from "react";

const Delete: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
        d="M20 28L25 88H75L80 28H20ZM24.3472 32L28.6805 84H71.3195L75.6528 32H24.3472Z"
        fill={props.fill ?? "gray"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M81 24H19V28H81V24ZM15 20V32H85V20H15Z"
        fill={props.fill ?? "gray"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52 16H48V20H52V16ZM44 12V24H56V12H44Z"
        fill={props.fill ?? "gray"}
      />
    </svg>
  );
};

export default Delete;
