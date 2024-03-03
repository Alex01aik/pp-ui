"use client";

import { useEffect } from "react";
import { useForm, FormProvider, UseFormProps } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.css";
import "@/styles.css";

export type FormProps = {
  validationSchema?: yup.AnyObjectSchema;
  onValuesChange?: (values: any) => void;
  onSubmit?: (values: any) => void;
  useFormProps?: UseFormProps;
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const Form: React.FC<FormProps> = ({
  useFormProps,
  validationSchema,
  onValuesChange,
  ...props
}) => {
  const methods = useForm({
    ...useFormProps,
    resolver: yupResolver(validationSchema ?? yup.object({})),
  });

  useEffect(() => {
    if (onValuesChange) {
      methods.watch(() => onValuesChange?.(methods.getValues()));
    }
  }, [methods, onValuesChange]);

  return (
    <FormProvider {...methods}>
      <form
        {...props}
        onSubmit={methods.handleSubmit((data) => {
          if (props.onSubmit) {
            props.onSubmit(data);
          }
        })}
        className={`${styles.form} ${props.className}`}
      >
        {props.children}
      </form>
    </FormProvider>
  );
};

export default Form;
