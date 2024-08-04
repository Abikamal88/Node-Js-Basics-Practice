// Normal Function

const square = function (x) {
    return x * x
}
square(8)
square(4)
console.log(square(8));
console.log(square(4));

// Arrow Function

const square1 = (x) => {
    return x * x
}
square1(8)  
console.log(square1(8));

// Arrow Function shorthand

const square2 = (x) => x * x

square2(8)  
console.log(square2(8));

// Arrow Function with forEach

const event  = {
    name: 'Birthday Party',
    guestList: ['Abi', 'Samee', 'Nive', 'Haru'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()

// Goal: Create method to get incomplete tasks
//
// 1. Define TasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const Object1 = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    TasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
  }
  
const outPut = Object1.TasksToDo()
console.log(outPut)
