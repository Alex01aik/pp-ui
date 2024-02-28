import React, { useEffect, useState } from "react";
import { SwitchProps } from "./props";
import styles from "./styles.module.css";

const Switch: React.FC<SwitchProps> = ({
  value,
  onChange,
  values,
  ...props
}) => {
  const [check, toggleCheck] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const activeButtonStyles = (value: boolean) => ({
    background: value ? "white" : "transparent",
  });

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
      className={`${styles.switch} ${props.switchProps?.className}`}
      {...props.switchProps}
      onClick={() => {
        if (!values) {
          toggleCheck(!check);
          onChange?.(!check);
        }
      }}
      style={{
        background: !values && check ? "gray" : "lightgray",
        ...props.switchProps?.style,
        width: values ? "100%" : "var(--switch-w)",
      }}
    >
      {values ? (
        <>
          {values.map((value, index) => (
            <div
              key={index}
              {...props.buttonProps}
              className={`${styles.switchButton} ${props.buttonProps?.className}`}
              style={{
                ...props.buttonProps?.style,
                ...activeButtonStyles(value === selectedValue),
              }}
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
            style={activeButtonStyles(!check)}
          />
          <div
            {...props.buttonProps}
            className={`${styles.switchButton} ${props.buttonProps?.className}`}
            style={activeButtonStyles(check)}
          />
        </>
      )}
    </div>
  );
};

export default Switch;
