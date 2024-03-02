import { SVGProps } from "react";

const Close: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          d="M9.15653e-05 14L14.0001 -3.10466e-05L100 86L86 100L9.15653e-05 14Z"
          fill={props.fill ?? "gray"}
        />
        <path
          d="M86 2.28974e-05L100 14L14 100L4.14844e-07 86L86 2.28974e-05Z"
          fill={props.fill ?? "gray"}
        />
      </g>
    </svg>
  );
};

export default Close;
