import { DetailedHTMLProps, HTMLAttributes, TableHTMLAttributes } from "react";
import { TableColumnFormat } from "../types/TableColumnFormat";
import { TableHeaderProps } from "../TableHeader/props";
import { TableItemProps } from "../TableItem/props";

export type TableProps = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
> & {
  items: any[];
  keys?: string[];
  format?: TableColumnFormat[];
  tableHeaderProps?: Omit<TableHeaderProps, "titles">;
  tableBodyProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >;
  tableItemProps?: Omit<TableItemProps, "titles" | "item" | "keys" | "key">;
};
