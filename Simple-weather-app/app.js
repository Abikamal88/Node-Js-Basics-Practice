const geocode = require('./geocode');
const forecast = require('./forecast');

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }
        forecast(data.location, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(forecastData)
        })
    })

//     geocode('India', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

}


