import { SVGProps } from "react";

const Edit: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 30V90H80V30H20ZM14 20C11.7909 20 10 21.7909 10 24V96C10 98.2091 11.7909 100 14 100H86C88.2091 100 90 98.2091 90 96V24C90 21.7909 88.2091 20 86 20H14Z"
        fill={props.fill ?? "gray"}
      />
      <path
        d="M73.9395 0L87.2041 8.94709L53.6525 58.6893L41.9456 64.895C40.5319 65.6444 38.8543 64.5129 39.0195 62.9214L40.3879 49.7423L73.9395 0Z"
        fill={props.fill ?? "gray"}
      />
    </svg>
  );
};

export default Edit;
