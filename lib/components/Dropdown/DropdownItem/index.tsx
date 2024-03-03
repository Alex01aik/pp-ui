import { useState } from "react";
import Arrow from "@/icons/Arrow";
import { DropdownItemProps } from "./props";
import styles from "./styles.module.css";
import "@/styles.css";

const DropdownItem: React.FC<DropdownItemProps> = ({ option, itemProps }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const { active, activeStyle, ...props } = itemProps ?? {};

  return (
    <>
      <div
        {...props}
        className={`${styles.dropdownItem} ${itemProps?.className}`}
        style={
          active?.(option)
            ? { ...itemProps?.style, ...activeStyle }
            : itemProps?.style
        }
        onClick={(event) => {
          if (option.options) {
            event.stopPropagation();
            setIsOpenDropDown(!isOpenDropDown);
          } else {
            itemProps?.onClick?.(event, option);
          }
        }}
      >
        <div>{option.value}</div>
        {option.options && (
          <Arrow
            className={`${styles.dropdownDropArrow}`}
            style={{
              transform: `rotate(${isOpenDropDown ? "180" : "0"}deg)`,
            }}
          />
        )}
      </div>
      {isOpenDropDown &&
        option.options?.map((item, index) => (
          <DropdownItem key={index} option={item} itemProps={itemProps} />
        ))}
    </>
  );
};

export default DropdownItem;

// TODO
// const hasSelected = (option: OptionType, selectedValue: string) => {
//   if (option.options) {
//     option.options.some((i) => hasSelected(i, selectedValue));
//   } else {
//     return option.value === selectedValue;
//   }
// };
