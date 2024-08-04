const http = require('http')

const url = 'http://localhost:8080/api/student/getonestudent/3'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', chunk => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
  
})

request.on('error', (error) => {
    console.log('An error', error)
  })
  
  request.end()