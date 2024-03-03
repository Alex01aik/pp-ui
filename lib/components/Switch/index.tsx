import React, { useEffect, useState } from "react";
import { SwitchProps } from "./props";
import styles from "./styles.module.css";
import "@/styles.css";

const Switch: React.FC<SwitchProps> = ({
  value,
  onChange,
  values,
  ...props
}) => {
  const [check, toggleCheck] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  useEffect(() => {
    switch (true) {
      case typeof value === "string":
        setSelectedValue(value);
        onChange?.(value);
        break;
      case typeof value === "boolean":
      default:
        toggleCheck(Boolean(value));
        onChange?.(Boolean(value));
        break;
    }
  }, [onChange, value]);

  return (
    <div
      {...props.switchProps}
      className={`${styles.switch} ${props.switchProps?.className}`}
      onClick={() => {
        if (!values) {
          toggleCheck(!check);
          onChange?.(!check);
        }
      }}
      data-selected={(!values && check).toString()}
      data-switch-type={values ? "values" : "simple"}
    >
      {values ? (
        <>
          {values.map((value, index) => (
            <div
              key={index}
              {...props.buttonProps}
              className={`${styles.switchButton} ${props.buttonProps?.className}`}
              data-active={value === selectedValue}
              onClick={() => {
                setSelectedValue(value);
                onChange?.(value);
              }}
            >
              {value}
            </div>
          ))}
        </>
      ) : (
        <>
          <div
            {...props.buttonProps}
            className={`${styles.switchButton} ${props.buttonProps?.className}`}
            data-active={!check}
          />
          <div
            {...props.buttonProps}
            className={`${styles.switchButton} ${props.buttonProps?.className}`}
            data-active={check}
          />
        </>
      )}
    </div>
  );
};

export default Switch;
