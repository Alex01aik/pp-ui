import { SVGProps } from "react";

const Arrow: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_54_55)">
        <path
          d="M100 40C100 67.6142 50 90 50 90C50 90 0 67.6142 0 40C0 15 19 10 25 10C31 10 50 15 50 40C50 15 68.5 10 75 10C81 10 100 15 100 40Z"
          fill={props.fill ?? "gray"}
        />
      </g>
    </svg>
  );
};

export default Arrow;
