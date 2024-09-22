const bcrypt = require('bcrypt');
import { getResults } from '../util/getResults'
const register = async (req, res) => {
    try {
        const { name, pass, email, avatar_url } = req.body
        if (!name || !pass || !email || avatar_url) {
            return res.status(403).send({
                message: 'all fields are required'
            })
        }

        const hashPass = await bcrypt.hash(pass, 10)

        const sql = /*sql*/`
            insert into users (name, pass, email, avatar_url)
            values (?, ?, ?, ?)
        `;

        const results = await getResults(sql, [name, hashPass, email, avatar_url])

        return res.status(203).send({
            message: 'successfully registered user',
            data: results
        })
    } catch(err) {
        console.error(err);
        return res.status(503).send({
            message: 'internal server error'
        })
    }
}

const login = async (req, res) => {
    
}

module.exports = {
    register,
    login
}