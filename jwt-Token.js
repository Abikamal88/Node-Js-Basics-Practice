 const jwt = require('jsonwebtoken')
const JWTsecret = 'fxdfxfhvhjvgfsw59766545225478jgseawefgchnjk)(&^)'

const jwtToken = async () =>{
    const token = jwt.sign({_id: 'AbiKamal8'}, JWTsecret)
    console.log('JWT Token:',token);

    const data = jwt.verify(token, JWTsecret)
    console.log(data);
}

jwtToken()