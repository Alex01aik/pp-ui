import { useEffect, useState } from "react";
import TableItem from "../TableItem";
import TableHeader from "../TableHeader";
import { TableProps } from "./props";
import styles from "./styles.module.css";

const Table: React.FC<TableProps> = ({
  items,
  keys,
  format,
  tableHeaderProps,
  tableBodyProps,
  tableItemProps,
  ...props
}) => {
  const [titles, setTitles] = useState<string[]>(
    Object.keys(items[0] ?? {}) ?? []
  );

  useEffect(() => {
    if (keys) {
      const filteredTitles = keys.reduce((acc, fieldName) => {
        if (items[0].hasOwnProperty(fieldName)) {
          acc.push(fieldName);
        }

        return acc;
      }, [] as string[]);
      setTitles(filteredTitles);
    }
  }, [items, keys]);

  return (
    <table {...props} className={`${styles.table} ${props.className}`}>
      <TableHeader titles={titles} format={format} {...tableHeaderProps} />
      <tbody {...tableBodyProps}>
        {items.map((item, index) => (
          <TableItem
            titles={titles}
            key={index}
            item={item}
            keys={keys}
            format={format}
            {...tableItemProps}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
