const Router = require('express')
const router = new Router()
const detailController = require('../controllers/detailController')

router.get('/', detailController.getAll)

module.exports = router