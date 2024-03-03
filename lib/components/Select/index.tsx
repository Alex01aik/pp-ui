import Arrow from "@/icons/Arrow";
import { useEffect, useState } from "react";
import Close from "@/icons/Close";
import Dropdown from "../Dropdown";
import styles from "./styles.module.css";
import "@/styles.css";

export type OptionType = {
  value: string;
  item?: any;
  options?: OptionType[];
};

export type SelectProps<T = any> = {
  options: T | string[] | OptionType[];
  isFilterSelected?: boolean;
  isAllowEmpty?: boolean;
  defaultValue?: string | string[];
  isMulty?: boolean;
  isSearch?: boolean;
  selectedOptions?: T | string[] | OptionType[];
  onUpdateOptions?: () => void | Promise<void>;
  onSelect?: (value: OptionType | OptionType[]) => void;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Select: React.FC<SelectProps> = ({
  options,
  isFilterSelected = true,
  isAllowEmpty = true,
  defaultValue,
  isMulty,
  isSearch,
  onUpdateOptions,
  ...props
}) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<OptionType[]>(
    props.selectedOptions ?? []
  );
  const [items, setItems] = useState<OptionType[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (options.length) {
      setItems(
        options.map((option: string | OptionType) => {
          if (typeof option === "string") {
            return { value: option };
          } else {
            return option;
          }
        })
      );
    } else {
      if (Number(Object.entries(options)[0][0]) === 0) {
        const ops = Object.entries(options ?? {});
        setItems(
          ops
            .slice(Math.ceil(ops.length / 2))
            .map(([key, value]: [string, any]) => ({
              value: String(key),
              item: { key, value },
            }))
        );
      } else {
        setItems(
          Object.entries(options).map(([key, value]: [string, any]) => ({
            value: String(value),
            item: { key, value },
          }))
        );
      }
    }
  }, [options, isAllowEmpty]);

  useEffect(() => {
    if (isMulty) {
      if (typeof defaultValue === "string") {
        setSelectedItems([{ value: defaultValue }]);
      } else {
        setSelectedItems(defaultValue?.map((value) => ({ value })) ?? []);
      }
    } else {
      if (defaultValue) {
        const defItem = items.find(
          (i) =>
            i.value ===
            (typeof defaultValue === "string"
              ? defaultValue
              : defaultValue?.[0])
        );
        setSelectedItems(defItem ? [defItem] : []);
      }
    }

    if (!isAllowEmpty && !defaultValue) {
      setSelectedItems([items[0]]);
    }
  }, [items, isAllowEmpty, isMulty, defaultValue]);

  return (
    <div className={`${styles.selectWrapper}`}>
      <div
        className={`${styles.selectInputWrapper}`}
        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
      >
        <div className={`${styles.selectInput}`}>
          {isMulty
            ? selectedItems.map((i, index) => (
                <div
                  className={`${styles.selectInputItem}`}
                  key={index}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                >
                  {i?.value}
                  <Close
                    className={`${styles.closeIcon}`}
                    onClick={() => {
                      if (isAllowEmpty) {
                        setSelectedItems(
                          selectedItems.filter(
                            (item) => item.value !== i?.value
                          )
                        );
                      } else {
                        if (selectedItems.length > 1) {
                          setSelectedItems(
                            selectedItems.filter(
                              (item) => item.value !== i?.value
                            )
                          );
                        }
                      }
                    }}
                  />
                </div>
              ))
            : selectedItems[0]?.value}
          {isSearch && (
            <input
              className={`${styles.selectInputInput}`}
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          )}
        </div>

        <Arrow
          className={`${styles.dropArrow}`}
          style={{
            transform: `rotate(${isOpenDropDown ? "180" : "0"}deg)`,
          }}
        />
      </div>

      {isOpenDropDown && (
        <Dropdown
          options={
            isFilterSelected
              ? (!isMulty && isAllowEmpty ? [{ value: "" }, ...items] : items)
                  .filter((i) => i.value.includes(search))
                  .filter(
                    (item) => !selectedItems.find((i) => i.value === item.value)
                  )
              : (!isMulty && isAllowEmpty
                  ? [{ value: "" }, ...items]
                  : items
                ).filter((i) => i.value.includes(search))
          }
          onUpdateOptions={onUpdateOptions}
          className={`${styles.selectDropdown}`}
          itemProps={{
            className: `${styles.selectDropdownItem}`,
            active: (item) =>
              Boolean(selectedItems.find((i) => i.value === item.value)),
            activeStyle: {
              background: "gainsboro",
            },
            onClick: (_, item) => {
              if (!selectedItems.find((i) => item.value === i.value)) {
                if (isMulty) {
                  setSelectedItems([...selectedItems, item]);
                  props.onSelect?.([...selectedItems, item]);
                } else {
                  setSelectedItems([item]);
                  props.onSelect?.(item);
                }

                setSearch("");
                setIsOpenDropDown(false);
              }
            },
          }}
        />
      )}
    </div>
  );
};

export default Select;
