const Router = require('express');
const router = new Router()
const employeesController = require('../controller/employees.controller');

router.post('/employees', employeesController.createEmployee)
router.get('/employees', employeesController.getEmployee)
router.get('/employees/:id', employeesController.getOneEmployee)
router.put('/employees', employeesController.updateEmployee)
router.delete('/employees/:id', employeesController.deleteEmployee)


module.exports = router