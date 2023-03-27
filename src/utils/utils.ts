export const returnPaginationLastPageStartIndex = (
  totalItemsCount: number,
  pageSize: number
): number => (Math.ceil(totalItemsCount / pageSize) - 1) * pageSize;
