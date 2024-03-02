import { DetailedHTMLProps, HTMLAttributes, ThHTMLAttributes } from "react";
import { TableColumnFormat } from "../types/TableColumnFormat";
import { SortRules } from "../types/SortRules";

export type TableHeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
> & {
  titles: string[];
  withSort?: boolean;
  onSort?: (sortRule: Record<string, SortRules>) => void;
  format?: TableColumnFormat[];
  rowProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  >;
  titleProps?: DetailedHTMLProps<
    ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  >;
};
