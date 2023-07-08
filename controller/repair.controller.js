const db = require('../db')

class RepairController{
    async createRepair(req, res){
        const {id_repair, item, specialist, completion_mark, repair_date} = req.body
        const newRepair = await db.query(
            'INSERT INTO repair (id_repair, item, specialist, completion_mark, repair_date) values ($1, $2, $3, $4, $5) RETURNING *',
            [id_repair, item, specialist, completion_mark, repair_date])
    
        res.json(newRepair.rows[0])
    }

    async getRepair(req, res){
        const repair = await db.query('SELECT * FROM repair')
        res.json(repair.rows)
    }

    async getOneRepair(req, res){
        const id = req.params.id
        const repair = await db.query('SELECT * FROM repair where id_repair = $1', [id])
        res.json(repair.rows[0])
    }

    async updateRepair(req, res){
        const {id_move, id_from, id_to, date_move} = req.body
        const repair = await db.query(
            'UPDATE repair set item = $1, specialist = $2, completion_mark = $3, repair_data = $4 where id_repair = $5 RETURNING *',
            [item, specialist, completion_mark, repair_date, id_repair])
    
        res.json(repair.rows[0])
    }
    async deleteRepair(req, res){
        const id = req.params.id
        const repair = await db.query('DELETE * FROM repair where id_repair = $1', [id])
        res.json(repair.rows[0])
    }
}

module.exports = new RepairController  