import { CSSProperties } from "react";
import { OptionType } from "../types/OptionType";

export type DropdownItemProps = {
  option: OptionType;
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
