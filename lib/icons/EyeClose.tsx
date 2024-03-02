import { SVGProps } from "react";

const EyeClose: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="140"
      height="100"
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70 100C97.6142 100 140 77.6142 140 50C140 22.3858 97.6142 0 70 0C42.3858 0 0 22.3858 0 50C0 77.6142 42.3858 100 70 100ZM70 90C92.0914 90 110 72.0914 110 50C110 27.9086 92.0914 10 70 10C47.9086 10 30 27.9086 30 50C30 72.0914 47.9086 90 70 90Z"
        fill={props.fill ?? "gray"}
      />
      <circle cx="70" cy="50" r="15" fill={props.fill ?? "gray"} />
      <path
        d="M109.427 0.523174C109.796 0.186608 110.277 0 110.776 0H134.844C136.67 0 137.541 2.24557 136.193 3.47682L31.0729 99.4768C30.7043 99.8134 30.2233 100 29.7242 100H5.65582C3.82998 100 2.9589 97.7544 4.30712 96.5232L109.427 0.523174Z"
        fill={props.fill ?? "gray"}
      />
    </svg>
  );
};

export default EyeClose;
