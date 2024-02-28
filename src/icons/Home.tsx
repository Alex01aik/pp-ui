import { SVGProps } from "react";

const Home: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_55_85)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 0L0 30V100H35V70H65V100H100V30L50 0Z"
          fill={props.fill ?? "gray"}
        />
      </g>
    </svg>
  );
};

export default Home;
