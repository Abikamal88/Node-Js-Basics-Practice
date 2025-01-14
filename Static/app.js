const path = require('path')
const express = require('express')

console.log(__dirname)

const app = express()
const publicDirectoryPath = path.join(__dirname, '/public')

app.use(express.static(publicDirectoryPath))


app.listen(4000, () => {
    console.log('Server is up on port 4000.')
})