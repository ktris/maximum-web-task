const Router = require('express');
const router = new Router()
const repairController = require('../controller/repair.controller');

router.post('/repair', repairController.createRepair)
router.get('/repair', repairController.getRepair)
router.get('/repair/:id', repairController.getOneRepair)
router.put('/repair', repairController.updateRepair)
router.delete('/repair/:id', repairController.deleteRepair)


module.exports = router