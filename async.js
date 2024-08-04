//Asyncronous Function

//Functions running in parallel with other functions are called asynchronous

// Typically returns a promise, callback, or uses event handling to handle the result upon completion.

// The await keyword is permitted within the function body, 
// enabling asynchronous, promise-based behavior to be written in a cleaner style
// and avoiding the need to explicitly configure promise chains.

console.log('Starting')

setTimeout(() => {
    console.log('2 Second Timer')
}, 2000)

setTimeout(() => {
    console.log('0 Second Timer')
}, 0)

console.log('Stopping')
