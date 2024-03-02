import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  TdHTMLAttributes,
} from "react";
import { TableColumnFormat } from "../types/TableColumnFormat";

export type TableItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
> & {
  item: any;
  titles: string[];
  keys?: string[];
  format?: TableColumnFormat[];
  cellProps?: DetailedHTMLProps<
    TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;
  additionRow?: (item: any, toggleShow: () => boolean) => ReactNode;
  defaultShowAdditionRow?: boolean;
  additionRowProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};
