import { returnPaginationLastPageStartIndex } from "../utils";

it("returns the correct pagination last page start index", () => {
  const POST_COUNT = 100;
  const PAGE_SIZE = 10;
  expect(returnPaginationLastPageStartIndex(POST_COUNT, PAGE_SIZE)).toEqual(90);
});
