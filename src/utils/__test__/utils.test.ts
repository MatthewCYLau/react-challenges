import {
  returnPaginationLastPageStartIndex,
  fizzBuzz,
  asyncReturnArrayOfNumbers,
} from "../utils";

it("returns the correct pagination last page start index", () => {
  const POST_COUNT = 100;
  const PAGE_SIZE = 10;
  expect(returnPaginationLastPageStartIndex(POST_COUNT, PAGE_SIZE)).toEqual(90);
});

it("returns the correct array of FizzBuzz string (6)", () => {
  expect(fizzBuzz(6)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz"]);
});

it("returns the correct array of FizzBuzz string (15)", () => {
  expect(fizzBuzz(15)).toEqual([
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz",
  ]);
});

it("returns the correct array of numbers", async () => {
  const res = await asyncReturnArrayOfNumbers();
  expect(res).toEqual([1, 2, 3]);
});
