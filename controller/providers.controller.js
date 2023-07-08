const db = require('../db')

class ProvidersController{
    async createProviders(req, res){
        const {id_provider, company_name, name_provider, phone_number, place} = req.body
        const newProvider = await db.query(
            'INSERT INTO providers (id_provider, company_name, name_provider, phone_number, place) values ($1, $2, $3, $4, $5) RETURNING *',
            [id_provider, company_name, name_provider, phone_number, place])
    
        res.json(newProvider.rows[0])
    }

    async getProviders(req, res){
        const providers = await db.query('SELECT * FROM providers')
        res.json(providers.rows)
    }

    async getOneProvider(req, res){
        const id = req.params.id
        const provider = await db.query('SELECT * FROM providers where id_provider = $1', [id])
        res.json(provider.rows[0])
    }

    async updateProvider(req, res){
        const {id_provider, company_name, name_provider, phone_number, place} = req.body
        const provider = await db.query(
            'UPDATE providers set company_name = $1, name_provider = $2, phone_number = $3, place = $4 where id_provider = $5 RETURNING *',
            [company_name, name_provider, phone_number, place, id_provider])
    
        res.json(provider.rows[0])
    }
    async deleteProvider(req, res){
        const id = req.params.id
        const provider = await db.query('DELETE * FROM providers where id_provider = $1', [id])
        res.json(provider.rows[0])
    }
}

module.exports = new ProvidersController