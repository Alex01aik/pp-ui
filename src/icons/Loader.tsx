import { SVGProps } from "react";

const Loader: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_45_36)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.81334e-05 50.0171C0.00926995 77.6235 22.3915 100 50 100V85C30.6701 85 15 69.33 15 50H2.52724e-05C2.52724e-05 50.0057 2.6226e-05 50.0114 2.81334e-05 50.0171ZM50.072 5.56535e-05L50 5.56341e-05V15C69.33 15 85 30.67 85 50L100 50V49.9516C99.9739 22.3836 77.637 0.0389052 50.072 5.56535e-05Z"
          fill={props.fill ?? "gray"}
        />
      </g>
    </svg>
  );
};

export default Loader;
