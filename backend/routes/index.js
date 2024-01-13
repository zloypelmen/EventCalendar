const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
//const eventRouter = require('./eventRouter')

router.use('/user', userRouter)
//router.use('/event', eventRouter)

module.exports = router