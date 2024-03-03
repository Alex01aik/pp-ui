import { useState } from "react";
import Arrow from "@/icons/Arrow";
import { TableHeaderTitleProps } from "./props";
import { SortRules } from "../types/SortRules";
import styles from "./styles.module.css";
import "@/styles.css";

const TableHeaderTitle: React.FC<TableHeaderTitleProps> = ({
  title,
  format,
  withSort,
  onSort,
  ...props
}) => {
  const [sortRule, setSortRule] = useState<Record<string, SortRules>>({
    [title]: SortRules.null,
  });

  const orderButton = (rule: SortRules) => {
    switch (rule) {
      case "asc":
        return (
          <Arrow
            className={`${styles.titleArrow} ${styles.rotateArrow}`}
            fill="black"
          />
        );
      case "desc":
        return <Arrow className={styles.titleArrow} fill="black" />;
      case SortRules.null:
      default:
        return <Arrow className={`${styles.titleArrow} ${styles.hidden}`} />;
    }
  };

  return (
    <th {...props} className={`${styles.tableHeaderCell} ${props?.className}`}>
      {withSort ? (
        <div
          className={styles.withSort}
          onClick={() => {
            switch (sortRule[title]) {
              case SortRules.asc:
                setSortRule({ [title]: SortRules.desc });
                onSort?.({ [title]: SortRules.desc });
                break;
              case SortRules.desc:
                setSortRule({ [title]: SortRules.null });
                onSort?.({ [title]: SortRules.null });
                break;
              case SortRules.null:
              default:
                setSortRule({ [title]: SortRules.asc });
                onSort?.({ [title]: SortRules.asc });
                break;
            }
          }}
        >
          {format?.find((i) => i._key === title)?.title?.(title) ?? title}
          {orderButton(sortRule[title])}
        </div>
      ) : (
        format?.find((i) => i._key === title)?.title?.(title) ?? title
      )}
    </th>
  );
};

export default TableHeaderTitle;
