// timeEnd 函数在 nodejs 中不生效
function timeEnd(title, callback) {
  console.time(title)
  callback()
  console.timeEnd(title)
}

export {
  timeEnd,
}