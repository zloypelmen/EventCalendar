const Router = require('express')
const router = new Router()
const changeRouter = require('./changeRouter')
const userRouter = require('./userRouter')
//const eventRouter = require('./eventRouter')

router.use('/user', userRouter)
//router.use('/event', eventRouter)
router.use('/change', changeRouter)

module.exports = router