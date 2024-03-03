import { TableHeaderProps } from "./props";
import TableHeaderTitle from "../TableHeaderTitle";

const TableHeader: React.FC<TableHeaderProps> = ({
  titles,
  format,
  withSort,
  onSort,
  rowProps,
  titleProps,
  ...props
}) => {
  return (
    <thead {...props}>
      <tr {...rowProps}>
        {titles.map((title, index) => (
          <TableHeaderTitle
            key={index}
            title={title}
            withSort={withSort}
            onSort={onSort}
            {...titleProps}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
