import { DetailedHTMLProps, ThHTMLAttributes } from "react";
import { TableColumnFormat } from "../types/TableColumnFormat";
import { SortRules } from "../types/SortRules";

export type TableHeaderTitleProps = DetailedHTMLProps<
  ThHTMLAttributes<HTMLTableHeaderCellElement>,
  HTMLTableHeaderCellElement
> & {
  title: string;
  withSort?: boolean;
  onSort?: (sortRule: Record<string, SortRules>) => void;
  format?: TableColumnFormat[];
};
