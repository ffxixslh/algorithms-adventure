import { bubbleSort, betterBubbleSort } from './bubble-sort'
import { timeEnd } from '../utils/tools'

const arr = [5, 1, 3, 2, 4]

timeEnd("bubbleSort", () => {
  let res1 = bubbleSort(arr)
  console.log(res1)
})

timeEnd("betterBubbleSort", () => {
  let res2 = betterBubbleSort(arr)
  console.log(res2)
})
