const bcrypt = require('bcryptjs')

const encryptFunction = async () => {
    const password = 'Abikamal'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log(isMatch);
}

encryptFunction()