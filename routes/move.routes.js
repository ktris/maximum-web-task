const Router = require('express');
const router = new Router()
const moveController = require('../controller/move.controller');

router.post('/move', moveController.createMove)
router.get('/move', moveController.getMove)
router.get('/move/:id', moveController.getOneMove)
router.put('/move', moveController.updateMove)
router.delete('/move/:id', moveController.deleteMove)


module.exports = router