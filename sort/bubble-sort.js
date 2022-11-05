/**
 * @param arr 传入的初始数组
 * @returns `newArr`: 排序好的新数组
 *
 * @summary
 * 为什么内层循环的判断条件是 `j < newArr.length - i` ?
 *
 *    答：每一次外层循环结束后，剩余数组中最大的元素都会被固定下来，例如：
 *
 *        (1): rest = [5, 1, 3, 2, 4], [5, 1, 3, 2, 4] -> [1, 3, 2, 4, `5`], i = 1
 *
 *        (2): rest = [1, 3, 2, 4], [1, 3, 2, 4, 5] -> [1, 2, 3, `4`, `5`], i = 2
 *
 *        (3): rest = [1, 2, 3], [1, 2, 3, 4, 5] -> [1, 2, `3`, `4`, `5`], i = 3
 *
 *        (4): rest = [1, 2], [1, 2, 3, 4, 5] -> [1, `2`, `3`, `4`, `5`], i = 4
 *
 *        (5): rest = [1], [1, 2, 3, 4, 5] -> [`1`, `2`, `3`, `4`, `5`], i = 5
 *
 */

/**
 * 1. 初始版本，双层 for 难以理解，效率低
 */
function bubbleSort(arr) {
  const newArr = [...arr]
  let swapped = false

  for (let i = 0; i < newArr.length - 1; i += 1) {
    for (let j = 0; j < newArr.length - i; j += 1) {
      swapped == false

      if (newArr[j + 1] < newArr[j]) {
        ;[newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]]
        swapped = true
      }
    }

    if (!swapped) {
      return newArr
    }
  }

  return newArr
}

/**
 * 2. 改进版本， 用 while 代替第一层 for 意思明了，效率高
 */
function betterBubbleSort(arr) {
  const newArr = [...arr]
  let isSorted = false
  let restItems = newArr.length - 1

  while (!isSorted) {
    isSorted = true

    for (let i = 0; i < restItems; i += 1) {
      if (newArr[i + 1] < newArr[i]) {
        ;[newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]]
        isSorted = false
      }
    }

    restItems -= 1
  }

  return newArr
}

const arr = [5, 1, 3, 2, 4]

// timeEnd 函数在 nodejs 中不生效
function timeEnd(title, callback) {
  console.time(title)
  callback()
  console.timeEnd(title)
}

timeEnd("bubbleSort", () => {
  let res1 = bubbleSort(arr)
  console.log(res1)
})

timeEnd("betterBubbleSort", () => {
  let res2 = betterBubbleSort(arr)
  console.log(res2)
})
