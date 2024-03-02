import { useEffect, useRef, useCallback } from "react";
import Table from "../Table";
import { ScrollTableProps } from "./props";
import styles from "./styles.module.css";

const ScrollTable: React.FC<ScrollTableProps> = ({
  onUpdateItems,
  wrapperProps,
  ...props
}) => {
  const tableRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(async () => {
    if (onUpdateItems) {
      const tableWrapper = tableRef.current;

      if (
        tableWrapper &&
        tableWrapper.scrollTop + tableWrapper.clientHeight >
          tableWrapper.scrollHeight - 1
      ) {
        await onUpdateItems();
      }
    }
  }, [onUpdateItems]);

  useEffect(() => {
    const tableWrapper = tableRef.current;

    if (tableWrapper) {
      tableWrapper.addEventListener("scroll", handleScroll);

      return () => {
        tableWrapper.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div
      {...wrapperProps}
      className={`${styles.scrollTableWrapper} ${wrapperProps?.className}`}
      ref={tableRef}
    >
      <Table
        {...props}
        tableHeaderProps={{
          ...props.tableHeaderProps,
          className: `${styles.scrollTableHeader} ${props.tableHeaderProps?.className}`,
        }}
      />
    </div>
  );
};

export default ScrollTable;
