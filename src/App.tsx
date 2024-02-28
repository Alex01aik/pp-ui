import React from "react";
import { TableColumnFormat } from "./components/_Table/types/TableColumnFormat";
import ThemeProvider from "./components/_Theme/ThemeProvider";
import ModalProvider from "./components/_Modal/ModalProvider";
import NotificationProvider from "./components/_Notification/NotificationProvider";
import ModalButton from "./components/_test/ModalButton";
import NotificationButton from "./components/_test/NotificationButton";
import ScrollTable from "./components/_Table/ScrollTable";

const mockDropdownData = [
  {
    value: "test1",
    options: [
      {
        value: "test1.1",
        options: [
          {
            value: "test1.1.1",
          },
          {
            value: "test1.1.2",
          },
        ],
      },
      {
        value: "test1.2",
      },
    ],
  },
  {
    value: "test2",
  },
  {
    value: "test3",
  },
  {
    value: "test4",
  },
];
const mockTableData = [
  { id: "id1", title: "title1", payload: { test: "test" } },
  { id: "id2", title: "title2" },
  { id: "id3", title: "title3" },
  { id: "id4", title: "title4" },
  { id: "id5", title: "title5" },
  { id: "id6", title: "title6" },
  { id: "id7", title: "title7" },
  { id: "id8", title: "title8" },
  { id: "id9", title: "title9" },
  { id: "id10", title: "title10" },
  { id: "id11", title: "title11" },
  { id: "id12", title: "title12" },
  { id: "id13", title: "title13" },
  { id: "id14", title: "title14" },
  { id: "id15", title: "title15" },
];

const format: TableColumnFormat[] = [
  {
    _key: "id",
    title: (title: string) => <div style={{ color: "red" }}>{title}</div>,
  },
  {
    _key: "title",
    value: (value: any, toggleShowAdditionRow) => (
      <div style={{ color: "blue" }} onClick={toggleShowAdditionRow}>
        {value}
      </div>
    ),
  },
];

const App: React.FC = () => {
  return (
    <main>
      <ThemeProvider>
        <ModalProvider>
          <NotificationProvider>
            <main
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                gap: 12,
                background: "var(--dark-bg)",
              }}
            >
              <ModalButton />
              <NotificationButton />
              <ScrollTable
                items={mockTableData}
                onUpdateItems={() => {
                  console.log("update");
                }}
                format={format}
                tableItemProps={{
                  additionRow: (item) => <div>{JSON.stringify(item)}</div>,
                }}
                tableHeaderProps={{
                  withSort: true,
                  onSort: (data) => console.log("data", data),
                }}
              />
              {/* <PaginationTable
          items={items}
          total={15}
          onChangePage={(take: number, skip: number) => {
            setItems(mockTableData.slice(skip, skip + take));
          }}
          format={format}
        /> */}

              {/* <Form
            style={{
              width: 320,
            }}
            validationSchema={object().shape({
              text: string().required(),
              password: string().required(),
              code: string().min(4).required(),
              select: object().required(),
            })}
            onSubmit={(e) => {
              console.log("e", e);
            }}
          >
            <FormSelect options={mockDropdownData} name="select" />
            <SearchInput />
            <FileInput type={FileInputType.ONLY_IMAGE} />
            <FormSwitch name="switch" />
            <FormInput name="text" />
            <FormPasswordInput name="password" />
            <FormCodeInput name="code" />
            <Button>Button</Button>
          </Form> */}
            </main>
          </NotificationProvider>
        </ModalProvider>
      </ThemeProvider>
    </main>
  );
};

export default App;
