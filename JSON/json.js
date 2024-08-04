const fs = require('fs')

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
const parseData = JSON.parse(bookJSON)

console.log(bookJSON);
console.log(parseData);
console.log(parseData.author);

const Data = require('./json.json')
const Read = fs.readFileSync('json.json')
const String = Read.toString()
const Object = JSON.parse(String)

console.log(Data);
console.log(String);
console.log(Object);
console.log(Object.name);

Data.Gender='Female'
Data.DOB='08/04/2001'

const DataJSON = JSON.stringify(Data, false, 2)
fs.writeFileSync('json2.json', DataJSON)

console.log(DataJSON);



