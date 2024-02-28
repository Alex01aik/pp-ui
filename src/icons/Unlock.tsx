import { SVGProps } from "react";

const Unlock: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_55_97)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M91.6666 41.6667C91.6666 18.6548 73.0118 0 50 0C32.9435 0 18.2807 10.2486 11.8337 24.9238L26.9919 31.8713C30.8023 22.9326 39.6694 16.6667 50 16.6667C63.8071 16.6667 75 27.8595 75 41.6667L0 41.6667V100H100V41.6667L91.6666 41.6667ZM55.6317 70.211C57.5492 68.7707 58.7895 66.4776 58.7895 63.8947C58.7895 59.5346 55.2549 56 50.8947 56C46.5346 56 43 59.5346 43 63.8947C43 66.4776 44.2403 68.7707 46.1578 70.211L43 86H58.7895L55.6317 70.211Z"
          fill={props.fill ?? "gray"}
        />
      </g>
    </svg>
  );
};

export default Unlock;
