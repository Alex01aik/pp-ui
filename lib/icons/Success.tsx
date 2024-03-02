import { SVGProps } from "react";

const Success: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        y="54.1422"
        width="20"
        height="50"
        transform="rotate(-45 0 54.1422)"
        fill={props.fill ?? "gray"}
      />
      <rect
        x="85.5685"
        y="11"
        width="20"
        height="90"
        transform="rotate(45 85.5685 11)"
        fill={props.fill ?? "gray"}
      />
    </svg>
  );
};

export default Success;
