import { useEffect, useRef, useCallback } from "react";
import DropdownItem from "./DropdownItem";
import { DropdownProps } from "./props";
import "@/styles.css";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onUpdateOptions,
  itemProps,
  ...props
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(async () => {
    if (onUpdateOptions) {
      const dropdownContainer = dropdownRef.current;

      if (
        dropdownContainer &&
        dropdownContainer.scrollTop + dropdownContainer.clientHeight ===
          dropdownContainer.scrollHeight
      ) {
        await onUpdateOptions();
      }
    }
  }, [onUpdateOptions]);

  useEffect(() => {
    const dropdownContainer = dropdownRef.current;

    if (dropdownContainer) {
      dropdownContainer.addEventListener("scroll", handleScroll);

      return () => {
        dropdownContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div
      {...props}
      ref={dropdownRef}
      style={{
        zIndex: 1,
      }}
    >
      {options.map((option, index) => (
        <DropdownItem key={index} option={option} itemProps={itemProps} />
      ))}
    </div>
  );
};

export default Dropdown;
