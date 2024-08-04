const chalk = require('chalk')

const greenMsg = chalk.green.inverse.bold('Success!')
console.log(greenMsg)

const redMsg = chalk.red.inverse.bold('Error!') 
console.log(redMsg)

const yellowMsg = chalk.yellow.inverse.bold('Warning!')
console.log(yellowMsg)

const combined = chalk.blue('Hello') + ' World' + chalk.red('!')
console.log(combined)

const blueMsg = chalk.blue.bgRed.bold('Hello world!')
console.log(blueMsg)

const multipleArguments = chalk.blue('Hello', 'World!', 'Foo', 'Bar', 'Baz')
console.log(multipleArguments)

const nestStyles = chalk.green('Hello', chalk.underline.bgBlue('world') + '!')
console.log(nestStyles)

const chainStyles = chalk.bgRed.underline('Hello world!')
console.log(chainStyles)
