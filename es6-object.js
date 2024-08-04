// Object Property

const name = 'Abi'
const userAge = 23

const user = {
    name: name,
    age: userAge,
    location: 'Chennai'
}
console.log(user)

// Object property shorthand

const name1 = 'Samee'
const userAge1 = 24

const user1 = {
    name1,
    age: userAge1,
    location: 'Madurai'
}

console.log(user1)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice:'undefined',
    rating: 4.2
}

// const label = product.label
// console.log(label)
// const stock = product.stock
// console.log(stock)
// const salePrice = product.salePrice
// console.log(salePrice)

//----------------------(OR)--------------------------

// Instead of writing the above code, we can use object destructuring as shown below:

const {label:productLabel, price, stock, salePrice, rating = 5 } = product
console.log(productLabel)
console.log(stock)
console.log(rating)

// Object destructuring in function

const transaction = (type, myProduct) => {
    const {label, stock} = myProduct
    console.log(type, label, stock)
}
transaction('order', product) 

// Object destructuring in function with shorthand syntax

const transaction1 = (type, {
    label,
    stock = 0
}) => {
    console.log(type, label, stock)
}

transaction1('order', product)  