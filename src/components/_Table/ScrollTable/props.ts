import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TableProps } from "../Table/props";

export type ScrollTableProps = TableProps & {
  onUpdateItems?: () => Promise<void> | void;
  wrapperProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};
