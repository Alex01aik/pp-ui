import { useState } from "react";
import { TableItemProps } from "./props";
import styles from "./styles.module.css";

const TableItem: React.FC<TableItemProps> = ({
  item,
  keys,
  titles,
  format,
  cellProps,
  additionRow,
  defaultShowAdditionRow,
  additionRowProps,
  ...props
}) => {
  const [showAdditionRow, setShowAdditionRow] = useState<boolean>(
    defaultShowAdditionRow ?? false
  );

  return (
    <>
      <tr {...props} className={`${styles.tableRow} ${props.className}`}>
        {(keys ?? titles).map((key, index) => {
          const cellFormat = format?.find((i) => i._key === key)?.value;

          return (
            <td
              key={index}
              {...cellProps}
              className={`${styles.tableCell} ${cellProps?.className}`}
            >
              {cellFormat
                ? cellFormat?.(item[key], () => {
                    setShowAdditionRow(!showAdditionRow);
                    return !showAdditionRow;
                  })
                : typeof item[key] === "object"
                  ? JSON.stringify(item[key])
                  : item[key]?.toString() ?? ""}
            </td>
          );
        })}
      </tr>
      {showAdditionRow && (
        <tr>
          <td colSpan={(keys ?? titles).length} style={{ padding: 0 }}>
            <div
              {...additionRowProps}
              className={`${styles.additionRow} ${additionRowProps?.className}`}
            >
              {additionRow?.(item, () => {
                setShowAdditionRow(!showAdditionRow);
                return !showAdditionRow;
              })}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableItem;
