const request = require('request')

const url = 'http://localhost:8080/api/student/getonestudent/3'
request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})