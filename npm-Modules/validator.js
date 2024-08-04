const validator = require('validator')

const IsURL = validator.isURL('https://mead.io')
console.log(IsURL);

const IsEmail = validator.isEmail('foo@bar.com')
console.log(IsEmail);

const IsAlpha = validator.isAlpha('abc')
console.log(IsAlpha);

const IsNumeric = validator.isNumeric('123')
console.log(IsNumeric);

const IsAlphanumeric = validator.isAlphanumeric('abc123')
console.log(IsAlphanumeric);

const IsAscii = validator.isAscii('abc123') 
console.log(IsAscii);

const IsBoolean = validator.isBoolean('false')
console.log(IsBoolean);

const IsDate = validator.isDate('2002-07-15')
console.log(IsDate);

const IsDecimal = validator.isDecimal('123.45')
console.log(IsDecimal);
