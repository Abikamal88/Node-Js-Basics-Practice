const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Abirami.')
fs.appendFileSync('notes.txt', 'I am a software developer.')

// fs.writeFileSync('notes.txt', 'My name is Sameera.')
fs.appendFileSync('notes.txt', 'I am a  developer.')

reader = fs.createReadStream('notes.txt');

reader.on('data', function (chunk) { 
    console.log(chunk.toString()); 
});

// let writer = fs.createWriteStream('notes.txt')  
// Read and display the file data on console  
// writer.write('Iam Abirami');

