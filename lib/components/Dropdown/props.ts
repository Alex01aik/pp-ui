import { CSSProperties } from "react";
import { OptionType } from "../Select";

export type DropdownProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  options: OptionType[];
  onUpdateOptions?: () => void;
  itemProps?: Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onClick"
  > & {
    active?: (item: OptionType) => boolean;
    activeStyle?: CSSProperties;
    onClick?: (event: any, item: OptionType) => void;
  };
};
