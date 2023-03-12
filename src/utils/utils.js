export const returnPaginationLastPageStartIndex = (totalItemsCount, pageSize) =>
  (Math.ceil(totalItemsCount / pageSize) - 1) * pageSize;
