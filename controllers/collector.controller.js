const collectorService = require("../services/collector.services")
const httpStatus = require('http-status');

const findAllCollector = async (req, res) => {
    const collector = await collectorService.queryAllCollector()
    res.send(collector)
}

const findOneCollector = async (req, res) => {
    const collector = await collectorService.queryOneCollector(req.params.collector_id)
    res.send(collector)
}
const createCollector = async (req, res) => {
    const collector = await collectorService.saveCollector(req.body)
    res.status(httpStatus.CREATED).send(collector)
}

const updateCollectorInfo = async (req, res) => {
    const collector = await collectorService.updateCollector(req.params.collector_id, req.body)
    res.send(collector)
}

const removeCollector = async (req, res) => {
    const collector = await collectorService.deleteCollector(req.params.collector_id)
    res.send(collector)
}

// Customer Login
const collectorLogin = async(req, res) => {
    const validate = await collectorService.collectorLogin(req.body.email, req.body.password)
    
    if (validate.status == 200){
        res.status(validate.status).json(validate).end()
    }else {
        res.status(validate.status).end()
    }
}

const collectorRefreshToken = async(req, res) => {
    const refreshToken = req.headers.token
    if (refreshToken==null) return res.sendStatus(401)

    const token_exist = await Token.findOne({"refreshToken" : refreshToken }).exec()
    if (token_exist==null) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) =>{
        if (err) return res.sendStatus(403)
        
        const accessToken = jwt.sign({"email" : user.email}, process.env.ACCESS_TOKEN_SECRET, { 'expiresIn' : 15})
        return res.status(200).json({"accessToken" : accessToken}).end()
    })
}

const collectorLogout = async (req, res) => {
    logout_collector = await collectorService.collectorLogout(req.headers.token)
    res.sendStatus(logout_collector.status)
}







module.exports = {
    createCollector,
    findAllCollector,
    findOneCollector,
    removeCollector,
    updateCollectorInfo,
    collectorLogin,
    collectorRefreshToken,
    collectorLogout
    
}