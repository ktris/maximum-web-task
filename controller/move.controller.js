const db = require('../db')

class MoveController{
    async createMove(req, res){
        const {id_move, id_from, id_to, date_move} = req.body
        const newMove = await db.query(
            'INSERT INTO move (id_move, id_from, id_to, date_move) values ($1, $2, $3, $4) RETURNING *',
            [id_move, id_from, id_to, date_move])
    
        res.json(newMove.rows[0])
    }

    async getMove(req, res){
        const move = await db.query('SELECT * FROM move')
        res.json(move.rows)
    }

    async getOneMove(req, res){
        const id = req.params.id
        const move = await db.query('SELECT * FROM move where id_move = $1', [id])
        res.json(move.rows[0])
    }

    async updateMove(req, res){
        const {id_move, id_from, id_to, date_move} = req.body
        const move = await db.query(
            'UPDATE move set id_from = $1, id_to = $2, date_move = $3, where id_move = $4 RETURNING *',
            [id_from, id_to, date_move, id_move])
    
        res.json(move.rows[0])
    }
    async deleteMove(req, res){
        const id = req.params.id
        const move = await db.query('DELETE * FROM move where id_move = $1', [id])
        res.json(move.rows[0])
    }
}

module.exports = new MoveController