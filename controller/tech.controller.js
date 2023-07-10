const db = require('../db')

class TechController{
    async createTech(req, res){
        const {id_item, name_technique, accessories, descript, state, date_of_buy, id_employee, id_provider, id_move, id_repair, availability} = req.body
        const newTech = await db.query(
            'INSERT INTO technique (id_item, name_technique, accessories, descript, state, date_of_buy, id_employee, id_provider, id_move, id_repair, availability) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
            [id_item, name_technique, accessories, descript, state, date_of_buy, id_employee, id_provider, id_move, id_repair, availability])
    
        res.json(newTech.rows[0])
    }

    async getTech(req, res){
        const tech = await db.query('SELECT * FROM technique')
        res.json(tech.rows)
    }

    async getOneTech(req, res){
        const id = req.params.id
        const tech = await db.query('SELECT * FROM technique where id_item = $1', [id])
        res.json(tech.rows[0])
    }

    async updateTech(req, res){
        const {id_item, name_technique, accessories, descript, state, date_of_buy, id_employee, id_provider, id_move, id_repair, availability} = req.body
        const newTech = await db.query(
            'UPDATE technique set name_technique = $1, accessories = $2, descript = $3, state = $4, date_of_buy = $5, id_employee = $6, id_provider = $7, id_move = $8, id_repair = $9, availability = $10 where id_item = $11 RETURNING *',
            [name_technique, accessories, descript, state, date_of_buy, id_employee, id_provider, id_move, id_repair, availability, id_item])
    
        res.json(newTech.rows[0])
    }
    async deleteTech(req, res){
        const id = req.params.id
        const tech = await db.query('DELETE * FROM technique where id_item = $1', [id])
        res.json(tech.rows[0])
    }
}

module.exports  = new TechController
