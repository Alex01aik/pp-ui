import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

export type CodeInputProps = {
  value?: number;
  onChange?: (value: string) => void;
  length?: number;
  itemProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
} & React.DetailedHTMLProps<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
  HTMLFieldSetElement
>;

const CodeInput: React.FC<CodeInputProps> = ({
  value,
  onChange,
  length = 4,
  itemProps,
  ...props
}) => {
  // TODO
  // const [code, setCode] = useState<number>();
  const [codeArr, setCodeArr] = useState<string[]>([]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    // setCode(value);
    setCodeArr(value?.toString().split("") ?? []);
  }, [value]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    const newArray = [...codeArr];
    newArray[index] = inputValue;

    setCodeArr(newArray);
    onChange?.(newArray.join(""));

    if (
      index < length - 1 &&
      inputValue.length === 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const inputValue = (event.target as any).value;
    const newArray = [...codeArr];
    newArray[index] = inputValue;

    if (event.key === "Backspace" && index > 0 && inputValue === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = () => {
    if (!codeArr.length) {
      inputRefs.current[0]?.focus();
    }
  };

  const handlePaste = (
    index: number,
    event: React.ClipboardEvent<HTMLInputElement>
  ) => {
    const pastedData = event.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "");
    if (Number(pastedData)) {
      const newArray = [...codeArr];

      const pastedValues = pastedData.split("").slice(0, length);

      pastedValues.forEach((value, i) => {
        newArray[index + i] = value;
      });

      setCodeArr(newArray);
      onChange?.(newArray.join(""));

      if (index + pastedValues.length < length) {
        inputRefs.current[index + pastedValues.length]?.focus();
      }
    }
  };

  return (
    <fieldset className={`${styles.codeInput} ${props.className}`}>
      {Array.from({ length: length }, (_, i) => i).map((index) => (
        <div
          key={index}
          {...itemProps}
          className={`${styles.inputItem} ${itemProps?.className}`}
        >
          <input
            onClick={handleFocus}
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
            value={codeArr[index] ?? ""}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length < 2 && (/[0-9]/.test(value) || value === "")) {
                handleChange(index, e);
              }
            }}
            onPaste={(e) => handlePaste(index, e)}
          />
        </div>
      ))}
    </fieldset>
  );
};

export default CodeInput;
