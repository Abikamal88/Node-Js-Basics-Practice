const request = require('request')

// Fetching the weather data without a function & callback

// const url = 'http://api.weatherapi.com/v1/current.json?key=41ea1725ea9c4964b8d33533241406&q=Boston&aqi=no'

// request({ url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.location.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.location.lat
//         const longitude = response.body.location.lon
//         console.log(latitude, longitude)
//     }
// })

// Fetching the weather data with a function & callback

const geocode = (address, callback) => {
    const geocodeURL = 'http://api.weatherapi.com/v1/current.json?key=41ea1725ea9c4964b8d33533241406&q='+ address +'&aqi=no'

    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const latitude = response.body.location.lat
            const longitude = response.body.location.lon
            const location1 = response.body.location.name
            const location2 = response.body.location.region
            const location3 = response.body.location.country

            const location = location1 + ', ' + location2 + ', ' + location3

            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
}

// geocode('India', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

module.exports = geocode