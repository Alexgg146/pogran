const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')
router.get('/user',userController.getInfo)
router.post('/user', userController.CreateApplication)
router.delete('/user/:id', userController.DeleteApplicarion)

module.exports = router