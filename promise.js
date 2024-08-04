// Promise

//A promise is basically an advancement of callbacks in NodeJS

//In other words, a promise is a JavaScript object which is used to handle all 
// the asynchronous data operations. While developing an application you may encounter 
// that you are using a lot of nested callback functions which causes a problem of callback hell. 
// Promises solve this problem of callback hell.

// "I Promise a Result!"
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code

// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value

// Example:
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve([7, 4, 1])
    // reject('Things went wrong!')
  }, 2000)
})

myPromise.then(function (result) {        // Normal Function
  console.log('Success!', result)
}).catch((error) => {                    // Arrow Function
  console.log('Error!', error)

})

//
//                               fulfilled
//                              /
// Promise   -- pending --> 
//                              \
//                               rejected
//

// Promise inside a function 

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(a + b), 2000)
  })
}

add(1, 1)
  .then(sum => add(sum, 4))
  .then((sum2) => console.log(sum2))
  .catch(error => console.log(error))