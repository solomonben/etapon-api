const jwt = require('jsonwebtoken')

function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization'] 
    jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) { return res.sendStatus(403) }
        req.user = user
        next()
    })
}

module.exports = { authenticateToken }