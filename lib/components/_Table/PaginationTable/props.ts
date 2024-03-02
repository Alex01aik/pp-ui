import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { TableProps } from "../Table/props";
import { PaginationToolbarProps } from "./components/PaginationToolbar/props";

export type PaginationTableProps = TableProps & {
  total?: number;
  take?: number;
  onChangePage?: (take: number, skip: number) => void | Promise<void>;
  buttonsToShow?: number;
  wrapperProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  LeftButton?: (onLeft: () => void) => ReactNode;
  RightButton?: (onRight: () => void) => ReactNode;
  paginationToolbarProps?: PaginationToolbarProps;
};
