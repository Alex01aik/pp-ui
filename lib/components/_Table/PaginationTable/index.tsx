import Table from "../Table";
import PaginationToolbar from "./components/PaginationToolbar";
import { PaginationTableProps } from "./props";
import "@/styles.css";

const PaginationTable: React.FC<PaginationTableProps> = ({
  wrapperProps,
  take,
  total,
  onChangePage,
  buttonsToShow,
  LeftButton,
  RightButton,
  paginationToolbarProps,
  ...props
}) => {
  return (
    <div {...wrapperProps}>
      <Table {...props} />
      <PaginationToolbar
        {...paginationToolbarProps}
        take={take}
        total={total}
        onChangePage={onChangePage}
        buttonsToShow={buttonsToShow}
        LeftButton={LeftButton}
        RightButton={RightButton}
      />
    </div>
  );
};

export default PaginationTable;
