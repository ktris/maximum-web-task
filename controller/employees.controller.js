const db = require('../db')

class EmployeesController{
    async createEmployee(req, res){
        const {id_employee, firstname, surname, second_name, phone_number, adress_name, job_title, state_name} = req.body
        const newEmployees = await db.query(
            'INSERT INTO employees (id_employee, firstname, surname, second_name, phone_number, adress_name, job_title, state_name) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [id_employee, firstname, surname, second_name, phone_number, adress_name, job_title, state_name])
    
        res.json(newEmployees.rows[0])
    }

    async getEmployee(req, res){
        const employee = await db.query('SELECT * FROM employees')
        employee.json(employee.rows)
    }

    async getOneEmployee(req, res){
        const id = req.params.id
        const employee = await db.query('SELECT * FROM employees where id_employee = $1', [id])
        employee.json(employee.rows[0])
    }

    async updateEmployee(req, res){
        const {id_employee, firstname, surname, second_name, phone_number, adress_name, job_title, state_name} = req.body
        const newEmployee = await db.query(
            'UPDATE employees set firstname = $1, surname = $2, second_name = $3, phone_number = $4, adress_name = $5, job_title = $6, state_name = $7 where id_employee = $8 RETURNING *',
            [firstname, surname, second_name, phone_number, adress_name, job_title, state_name, id_employee])
    
        res.json(newEmployee.rows[0])
    }
    async deleteEmployee(req, res){
        const id = req.params.id
        const employee = await db.query('DELETE * FROM employees where id_employee = $1', [id])
        res.json(employee.rows[0])
    }
}

module.exports = new EmployeesController
