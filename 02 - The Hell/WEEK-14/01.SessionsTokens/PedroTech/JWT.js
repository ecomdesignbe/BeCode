const {sign, verify} = require('jsonwebtoken')

const createTokens = (user) => {
    const accessToken = sign(
        { username : user.username, id: user.id }, 
        "jwtsecretplschange")
    
    return accessToken
}

const validateToken = (req, res, next) => {
    const accessToken = req.cookie['access-token']

    if (!accessToken) 
        return res.status(400).json({error: 'User not authenticated'})

    try {
        const validToken = verify(accessToken, 'jwtsecretplschange')

        if(validToken) {
            req.authenticated = true
            return next()
        }
    } catch (err) {
        return res.status(400).json({error: err})
    }
}

module.exports = {createTokens, validateToken}