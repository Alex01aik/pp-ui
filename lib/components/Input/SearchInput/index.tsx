import { SVGProps } from "react";
import SearchIcon from "@/icons/Search";
import styles from "./styles.module.css";
import "@/styles.css";

export type SearchInputProps = {
  iconProps?: SVGProps<SVGSVGElement>;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const SearchInput: React.FC<SearchInputProps> = ({ iconProps, ...props }) => {
  return (
    <div className={styles.searchInput}>
      <SearchIcon
        {...iconProps}
        className={`${styles.searchIcon} ${iconProps?.className}`}
      />
      <input {...props} />
    </div>
  );
};

export default SearchInput;
