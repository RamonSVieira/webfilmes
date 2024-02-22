import { useMemo } from 'react';

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

interface Props {
  totalItems: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

type UsePagination = (props: Props) => number[];

const usePagination: UsePagination = ({
  totalItems,
  pageSize,
  siblingCount,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalItems / pageSize);
    const totalPageNumbers = siblingCount + 2;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const dots: number[] = [];

    const middleRange = range(leftSiblingIndex, rightSiblingIndex);

    return [...middleRange, ...dots];
  }, [totalItems, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
export default usePagination;
