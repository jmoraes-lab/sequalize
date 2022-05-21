const { Router } = require('express')
const IndexController = require('./controllers/indexController')
const router = Router()

router.get('/', IndexController.index)
//router.get('/:id', IndexController.show)
//router.post('/:id', IndexController.save)
router.get('/create', IndexController.create)
router.post('/create', IndexController.store)

module.exports = router
