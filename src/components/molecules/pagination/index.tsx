import { FunctionComponent, HTMLAttributes, useMemo } from 'react';

import Button from '../../atoms/button';

import usePagination from '../../../hooks/usePagination';

import { SetState } from '../../../contracts/State';

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  handleChangePage: SetState<number>;
  pageSize: number;
  siblingCount?: number;
}
type Props = PaginationProps & HTMLAttributes<HTMLDivElement>;
const Pagination: FunctionComponent<Props> = ({
  totalItems,
  currentPage,
  handleChangePage,
  pageSize,
  siblingCount = 2,
  ...props
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalItems,
    siblingCount,
    pageSize,
  });

  const lastPage = useMemo(
    () => Math.ceil(totalItems / pageSize),
    [totalItems, pageSize]
  );

  const handleClickFirst = (): void => {
    handleChangePage(1);
  };
  const handleClickPrevious = (): void => {
    handleChangePage((newCurrentPage) => newCurrentPage - 1);
  };

  const handleClickNext = (): void => {
    handleChangePage((newCurrentPage) => newCurrentPage + 1);
  };
  const handleClickLast = (): void => {
    handleChangePage(lastPage);
  };

  return (
    <div {...props}>
      <Button
        onClick={handleClickFirst}
        disabled={totalItems === 0 || currentPage === 1}
      >
        Início
      </Button>
      <Button
        onClick={handleClickPrevious}
        disabled={totalItems === 0 || currentPage === 1}
      >
        Anterior
      </Button>
      {paginationRange.map((pageNumber) => {
        console.log({ pageNumber, currentPage });

        return (
          <Button
            key={pageNumber}
            aria-selected={currentPage === pageNumber}
            onClick={() => {
              handleChangePage(Number(pageNumber));
            }}
            className="aria-selected:text-red-800"
          >
            <span className="label">{pageNumber}</span>
          </Button>
        );
      })}
      <Button
        onClick={handleClickNext}
        disabled={totalItems === 0 || currentPage === lastPage}
      >
        Próximo
      </Button>
      <Button
        onClick={handleClickLast}
        disabled={totalItems === 0 || currentPage === lastPage}
      >
        Fim
      </Button>
    </div>
  );
};
export default Pagination;
