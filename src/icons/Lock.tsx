import { SVGProps } from "react";

const Lock: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_55_87)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33331 41.6667H0V100H100V41.6667H91.6666C91.6666 18.6548 73.0118 0 50 0C26.9881 0 8.33331 18.6548 8.33331 41.6667ZM75 41.6667C75 27.8595 63.8071 16.6667 50 16.6667C36.1929 16.6667 25 27.8595 25 41.6667H75ZM55.6317 70.211C57.5492 68.7707 58.7895 66.4776 58.7895 63.8947C58.7895 59.5346 55.2549 56 50.8947 56C46.5346 56 43 59.5346 43 63.8947C43 66.4776 44.2403 68.7707 46.1578 70.211L43 86H58.7895L55.6317 70.211Z"
          fill={props.fill ?? "gray"}
        />
      </g>
    </svg>
  );
};

export default Lock;
