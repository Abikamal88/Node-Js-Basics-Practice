// Callbak Function

//A callback is a function called after a given task. 
//This prevents any blocking and enables other code to run in the meantime.


// A callback is a function (Higher order function) passed as an argument to another function
     //Higher order function --> returns function as result and takes callback as argument
// This technique allows a function to call another function

// Callback in JavaScript is a function that is passed as an argument to another function and
//  is called by it at a certain point in the operation, 
//  e.g. after fetching data from the database. 
   
// A callback function can run after another function has finished

// A function that is used as an argument of another function with intension of be 
// being called later

//Advantage
//let you create asynchronous code that 
//doesn't block the main thread of execution.

// Example 1 - Simple Callback Func tion 
// Callback Function is used when function is not defined

setTimeout(function () {
   console.log('Callback as Standard Function');
}, 1000);

// Example 2

const names = ['Abi', 'Samee', 'Nive', 'Haru']
const shortNames = names.filter((name) => {
   return name.length <= 4
})
console.log(shortNames);

// Example 3
var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
   if (err)
      return console.error(err, 'Incorrect File Name');
   console.log(data.toString());
});

// Example 4

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        console.log(address)
        callback(data)
        
      }, 2000)
}

geocode('India', (data) => {
    console.log(data)
})

// Example 4 With Short Hand Syntax

const geocode1 = (address, callback) =>
   setTimeout(() => 
      console.log(address),
      callback({ latitude: 1, longitude: 1 }), 2000)

 geocode1('Tamil Nadu', data => console.log(data))

// Example 5

const add = (a, b, callback) => {
   setTimeout(() => {
       callback(a + b)
   }, 2000)
}

add(1, 4, (sum) => {
   console.log(sum) 
})

// Example 5 with Short Hand Syntax

 const add1 = (a, b, callback) => setTimeout(() => callback(a + b), 2000)
 add1(4, 4, sum => console.log(sum)) 
