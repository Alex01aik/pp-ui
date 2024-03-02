import { DetailedHTMLProps, HTMLAttributes } from "react";

export type SwitchProps = {
  value?: boolean | string;
  onChange?: (value: boolean | string) => void;
  values?: string[];
  switchProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  buttonProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
};
