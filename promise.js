//one part of your code or a third party api
var isATeenager = (age) => {
  return new Promise((resolve, reject) => {
    if (age == undefined) {
      reject("You are dead")
    } else if (age < 13 || age > 19) {
      resolve("You are a not teenager")
    } else {
      resolve("You are a teenager")
    }
  })
}





//another part of your code

var teenagerPromise = isATeenager(15)
var teenagerPromise2 = isATeenager(15)





//

teenagerPromise
  .then(data => console.log(data))
  .catch(error => console.log(error))

teenagerPromise
  .then(data => console.log(data))
  .catch(error => console.log(error))
