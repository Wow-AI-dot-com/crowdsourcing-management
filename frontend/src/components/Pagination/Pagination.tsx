import React from "react";
import "./Pagination.scss";
import { useNavigate } from "react-router-dom";

export type TProps = {
  disabled?: boolean,
  page: number,
  pageSize: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  total: number,
  target?: string,
}


export default function Pagination({disabled, page, pageSize, setPage, total, target = 'projects'}: TProps) {
  const pages = React.useMemo(() => {
    return Math.ceil(total / pageSize);
  }, [total, pageSize]);
  const navigate = useNavigate();

  const pageButtons = React.useMemo(() => {
    const buttons = [];

    const onSelectedPage = (i: number) => {
      setPage && setPage(i);
      target && navigate(`/${target}?page=${i}`);
    };

    for (let i = 1; i <= pages; i++) {
      const activeClass = i === page ? " c-pagination__page--active" : "";
      buttons.push(
        <button
          className={"c-pagination__page c-pagination__page--number" + activeClass}
          disabled={disabled || page === i}
          key={"pagination-page-" + i}
          onClick={() => onSelectedPage(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  }, [disabled, page, pages, target, setPage, navigate]);

  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
      target && navigate(`/${target}?page=${page - 1}`);
    }
  };

  const handleNextClick = () => {
    if (page < pages) {
      setPage(page + 1);
      target && navigate(`/${target}?page=${page + 1}`);
    }
  };

  if (pages === 1) {
    return null;
  }

  return (
    <div className="c-pagination">
      <button
        className="c-pagination__page c-pagination__page--prev"
        disabled={disabled || page === 1}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      {pageButtons}
      <button
        className="c-pagination__page c-pagination__page--next"
        disabled={disabled || page >= pages}
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
}
