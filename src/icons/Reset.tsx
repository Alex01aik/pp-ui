import { SVGProps } from "react";

const Reset: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_54_41)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 50C5 74.8528 25.1472 95 50 95C74.8528 95 95 74.8528 95 50C95 25.1472 74.8528 5 50 5L50 15.0001C69.33 15.0001 85 30.6701 85 50.0001C85 69.33 69.33 85.0001 50 85.0001C30.67 85.0001 15 69.33 15 50.0001C15 50 15 50 15 50L5 50Z"
          fill={props.fill ?? "gray"}
        />
        <path
          d="M28 13L50.5 0.00961876V25.9904L28 13Z"
          fill={props.fill ?? "gray"}
        />
      </g>
    </svg>
  );
};

export default Reset;
