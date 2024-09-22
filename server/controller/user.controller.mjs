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

        return res.status(201).send({
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
    try {
        const { user_id, login_time, user_name } = req.body;

        if (!user_id, !login_time, !user_name) {
            return res.status(403).send({
                message: 'all fields are required'
            })
        }

        const sql = /*sql*/`
            insert into online_users (user_id, login_time, user_name)
            values (?, ?, ?)
        `;

        const results = await getResults(sql, [user_id, now(), user_name]);

        return res.status(201).send({
            message: 'sauccessfully loged user in',
            data: results
        })
    } catch (err) {
        console.error(err);
        return res.status(503).send({
            message: 'internal server error'
        })
    }
}

const getAllUsers = async (req, res) => {

}

const getSingleUser = async (req, res) => {
    
}

const updateUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { name, email, updated_at } = req.body;

        if (!name || !email) {
            return res.status(403).send({
                message: 'all fields are required'
            })
        }

        const sql = /*sql*/`
            update users
            set name = ?, email = ?, updated_at = ?
            where user_id = ?
        `;

        const results = await getResults(sql, [user_id, name, email, now()]);

        if (results.affectedRows === 1) {
            return res.status(201).send({
                message: 'user successfully updated',
                data: results
            })
        }
    } catch (err) {
        console.error(err);
        return res.status(503).send()
    }
}

const removeUser = async (req, res) => {
    try {
        const sql = /*sql*/`
            delete from users
            where name=?
        `;

        const results = await getResults(sql);

        return res.status(201).send({
            message: 'user successfull deleted',
            data: results
        })
    } catch (err) {
        console.error(err);
        return res.status(503).send({
            message: 'internal server error'
        })
        
    }
}

module.exports = {
    register,
    login,
    getAllUsers,
    getSingleUser,
    updateUser,
    removeUser
}