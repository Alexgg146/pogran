const BD = require('../components/BD.js')
class UserController{
    async CreateApplication(req,res){
        const {name,email,age,phone,location,opros} = req.body
        const newPerson = await BD.query('INSERT INTO person (name,age,email,phone,location,opros) values ($1,$2,$3,$4,$5,$6) RETURNING *', [name,age,email,phone,location,opros])
        res.json(newPerson)
    }
    async getInfo(req,res){
        
        const getInfo = await BD.query('SELECT * FROM person')
        res.json(getInfo.rows);
    }
    async DeleteApplicarion(req,res){
        const id = req.params.id
        const user = await BD.query('DELETE FROM person where id = $1', [id]);
        res.json(user.rows);
    }
}
module.exports = new UserController()