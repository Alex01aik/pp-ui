import { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import ThemeSwitch from "../ThemeSwitch/intex";
import {
  Button,
  CodeInput,
  FileInput,
  Form,
  FormCodeInput,
  FormInput,
  FormPasswordInput,
  FormSelect,
  FormSwitch,
  OptionType,
  ScrollTable,
  FileInputType,
} from "@/components";
import * as yup from "yup";
import TextInput from "@/components/Input/TextInput";

const mockItems = [
  { id: 1, name: "first" },
  { id: 2, name: "second" },
  { id: 3, name: "third" },
  { id: 4, name: "fourth" },
  { id: 5, name: "fifth" },
  { id: 6, name: "sixth" },
  { id: 7, name: "seventh" },
  { id: 8, name: "eighth" },
  { id: 9, name: "nineth" },
  { id: 10, name: "tenth" },
  { id: 11, name: "eleventh" },
  { id: 12, name: "twelveth" },
  { id: 13, name: "thirteenth" },
  { id: 14, name: "fourteenth" },
  { id: 15, name: "fifteenth" },
  { id: 16, name: "sixteenth" },
  { id: 17, name: "seventeenth" },
  { id: 18, name: "eighteenth" },
  { id: 19, name: "nineteenth" },
  { id: 20, name: "twentyth" },
];

const mockOptions: OptionType[] = [
  {
    value: "test",
  },
  {
    value: "test1",
  },
];

const Layout: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.layout}>
      <header className={styles.header}>
        <ThemeSwitch />
      </header>
      <main className={styles.main}>
        <div className={styles.column}>
          <ScrollTable
            items={mockItems}
            style={{
              width: "100%",
            }}
            tableItemProps={{
              cellProps: {
                style: {
                  textAlign: "center",
                },
              },
            }}
          />
        </div>
        <div className={styles.column}>
          <Form
            validationSchema={yup.object({
              code: yup.string().required(),
              text: yup.string().required(),
            })}
          >
            <FileInput type={FileInputType.ONLY_IMAGE_SRC} />
            <FormCodeInput name="code" />
            <FormSwitch name="switch" />
            <FormPasswordInput name="password" />
            <FormSelect name="select" options={mockOptions} />
            <FormInput name="text" />
            <Button type="submit" />
          </Form>
          <CodeInput />
          <TextInput />
        </div>
      </main>
    </div>
  );
};

export default Layout;
