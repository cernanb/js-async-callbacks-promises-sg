// Example 1

setTimeout(() => {
  console.log("one")
  setTimeout(() => {
    console.log("two")
    setTimeout(() => {
      console.log("three")
    }, 3000)
  }, 2000)
}, 1000)

// Example 2
const one = (cb) => {
  console.log("one")
   setTimeout(cb, 1000)
}

const two = (cb) => {
  console.log("two")
  setTimeout(cb, 1000)
}

const three = () => {
  console.log("three")
}


one(() => {
  two(three)
})
