const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const detailRouter = require('./detailRouter')

router.use('/user', userRouter)
router.use('/detail', detailRouter)

module.exports = router