const Router = require('express');
const router = new Router()
const techController = require('../controller/tech.controller');

router.post('/tech', techController.createTech)
router.get('/tech', techController.getTech)
router.get('/tech/:id', techController.getOneTech)
router.put('/tech', techController.updateTech)
router.delete('/tech/:id', techController.deleteTech)


module.exports = router