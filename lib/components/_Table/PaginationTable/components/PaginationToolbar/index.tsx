import { useState } from "react";
import Arrow from "@/icons/Arrow";
import { PaginationToolbarProps } from "./props";
import styles from "./styles.module.css";

const PaginationToolbar: React.FC<PaginationToolbarProps> = ({
  total = 1,
  take = 1,
  buttonsToShow = 1,
  onChangePage,
  buttonProps,
  LeftButton,
  RightButton,
  activeButtonClass,
  activeButtonStyle,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(total / take);
  const startPage = Math.max(1, currentPage - Math.floor(buttonsToShow / 2));
  const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);

  return (
    <div {...props} className={`${styles.paginationBlock} ${props.className}`}>
      {LeftButton?.(() => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
          onChangePage?.(take, (currentPage - 2) * take);
        }
      }) ?? (
        <Arrow
          className={`${styles.arrowIcon} ${styles.leftArrow}`}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
              onChangePage?.(take, (currentPage - 2) * take);
            }
          }}
        />
      )}
      {startPage > 1 && (
        <>
          <button
            {...buttonProps}
            className={`${styles.pageButton} ${
              currentPage === 1 ? activeButtonClass ?? styles.activeButton : ""
            } ${buttonProps?.className}`}
            style={
              currentPage === 1
                ? {
                    ...buttonProps?.style,
                    ...activeButtonStyle,
                  }
                : buttonProps?.style
            }
            onClick={() => {
              setCurrentPage(1);
              onChangePage?.(take, 0);
            }}
          >
            1
          </button>
          {startPage > 2 ? <>...</> : <></>}
        </>
      )}
      {Array.from({ length: endPage - startPage + 1 }).map((_, i) => {
        return (
          <button
            key={i}
            {...buttonProps}
            className={`${styles.pageButton} ${
              currentPage === i + startPage
                ? activeButtonClass ?? styles.activeButton
                : ""
            } ${buttonProps?.className}`}
            style={
              currentPage === i + startPage
                ? {
                    ...buttonProps?.style,
                    ...activeButtonStyle,
                  }
                : buttonProps?.style
            }
            onClick={() => {
              setCurrentPage(i + startPage);
              onChangePage?.(take, (startPage + i - 1) * take);
            }}
          >
            {i + startPage}
          </button>
        );
      })}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 ? <>...</> : <></>}
          <button
            {...buttonProps}
            className={`${styles.pageButton} ${
              currentPage === totalPages
                ? activeButtonClass ?? styles.activeButton
                : ""
            } ${buttonProps?.className}`}
            style={
              currentPage === totalPages
                ? {
                    ...buttonProps?.style,
                    ...activeButtonStyle,
                  }
                : buttonProps?.style
            }
            onClick={() => {
              setCurrentPage(totalPages);
              onChangePage?.(take, (totalPages - 1) * take);
            }}
          >
            {totalPages}
          </button>
        </>
      )}
      {RightButton?.(() => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
          onChangePage?.(take, currentPage * take);
        }
      }) ?? (
        <Arrow
          className={`${styles.arrowIcon} ${styles.rightArrow}`}
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
              onChangePage?.(take, currentPage * take);
            }
          }}
        />
      )}
    </div>
  );
};

export default PaginationToolbar;
