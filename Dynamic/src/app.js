const path = require('path')
const express = require('express')



const app = express()
const publicDirectoryPath = path.join(__dirname, '../views')
app.set('views', publicDirectoryPath)
app.set('view engine', 'hbs')


app.get('', (req, res) => {
    res.render('index', {
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
   
})


app.listen(8000, () => {
    console.log('Server is up on port 8000.')
})