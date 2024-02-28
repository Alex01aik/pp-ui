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
      <rect
        y="32.1421"
        width="20"
        height="70"
        transform="rotate(-45 0 32.1421)"
        fill={props.fill ?? "gray"}
      />
      <rect
        x="85.4975"
        y="18"
        width="20"
        height="70"
        transform="rotate(45 85.4975 18)"
        fill={props.fill ?? "gray"}
      />
    </svg>
  );
};

export default Arrow;
