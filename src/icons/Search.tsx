import { SVGProps } from "react";

const Search: React.FC<SVGProps<SVGSVGElement>> = (props) => {
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
        <rect width="100" height="100" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.8528 73.8528C89.4738 58.2318 89.4738 32.9052 73.8528 17.2843C58.2318 1.6633 32.9052 1.6633 17.2843 17.2843C1.6633 32.9052 1.6633 58.2318 17.2843 73.8528C32.9052 89.4738 58.2318 89.4738 73.8528 73.8528ZM63.2462 63.2462C73.0093 53.4831 73.0093 37.654 63.2462 27.8909C53.4831 18.1278 37.654 18.1278 27.8909 27.8909C18.1278 37.654 18.1278 53.4831 27.8909 63.2462C37.654 73.0093 53.4831 73.0093 63.2462 63.2462Z"
          fill={props.fill ?? "gray"}
        />
        <rect
          x="67.4888"
          y="77.3884"
          width="15"
          height="25"
          transform="rotate(-45 67.4888 77.3884)"
          fill={props.fill ?? "gray"}
        />
      </g>
    </svg>
  );
};

export default Search;
