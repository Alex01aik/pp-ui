import {
  ButtonHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";

export type PaginationToolbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  total?: number;
  take?: number;
  onChangePage?: (take: number, skip: number) => void | Promise<void>;
  buttonsToShow?: number;
  buttonProps?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  activeButtonClass?: string;
  activeButtonStyle?: CSSProperties;
  LeftButton?: (onLeft: () => void) => ReactNode;
  RightButton?: (onRight: () => void) => ReactNode;
};
