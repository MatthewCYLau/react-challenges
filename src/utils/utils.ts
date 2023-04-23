export const returnPaginationLastPageStartIndex = (
  totalItemsCount: number,
  pageSize: number
): number => (Math.ceil(totalItemsCount / pageSize) - 1) * pageSize;


export const fizzBuzz = (limit: number): string[] => {
  return Array(limit)
    .fill(0)
    .map((_, i) => {
      const currentNumber = i + 1;
      let output = "";
      if (currentNumber % 3 === 0) output += "Fizz";
      if (currentNumber % 5 === 0) output += "Buzz";
      return output || currentNumber.toString();
    });
};