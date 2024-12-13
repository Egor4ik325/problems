function* range(start: number, stop: number, step = 1) {
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    yield i;
  }
}

// algo O(2n), space O(2n + n) - 25ms
// function productExceptSelf(nums: number[]): number[] {
//   const productStart = {};
//   const productEnd = {};
//   for (const numsIndex of range(0, nums.length)) {
//     const numStart = nums[numsIndex];
//     const prevProd = productStart[numsIndex - 1] ?? 1;
//     productStart[numsIndex] = prevProd * numStart;
//     const numsEndIndex = nums.length - 1 - numsIndex;
//     const numEnd = nums[numsEndIndex];
//     const nextProd = productEnd[numsEndIndex + 1] ?? 1;
//     productEnd[numsEndIndex] = nextProd * numEnd;
//   }
//   // console.log("productStart", productStart);
//   // console.log("productEnd", productEnd);
//   const productExcept = new Array(nums.length);
//   for (const numsIndex of range(0, nums.length)) {
//     const startProduct = productStart[numsIndex - 1] ?? 1;
//     const endProduct = productEnd[numsIndex + 1] ?? 1;
//     productExcept[numsIndex] = startProduct * endProduct;
//   }
//   return productExcept;
// }

// algo O(2n), space O(1 + n) - 25ms
function productExceptSelf(nums: number[]): number[] {
  const productExcept = new Array(nums.length);
  for (const numsIndex of range(0, nums.length)) {
    const numStart = nums[numsIndex];
    const prevProd = productExcept[numsIndex - 1] ?? 1;
    productExcept[numsIndex] = prevProd * numStart;
  }
  let productFromEnd = 1;
  for (const numsIndex of range(nums.length - 1, -1, -1)) {
    const prevNum = productExcept[numsIndex - 1] ?? 1;
    productExcept[numsIndex] = prevNum * productFromEnd;
    productFromEnd *= nums[numsIndex];
  }

  return productExcept;
}

console.log(productExceptSelf([1, 2, 3, 4]));

// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
