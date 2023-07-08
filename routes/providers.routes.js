const Router = require('express');
const router = new Router()
const providersController = require('../controller/providers.controller');

router.post('/providers', providersController.createProviders)
router.get('/providers', providersController.getProviders)
router.get('/providers/:id', providersController.getOneProvider)
router.put('/providers', providersController.updateProvider)
router.delete('/providers/:id', providersController.deleteProvider)


module.exports = router