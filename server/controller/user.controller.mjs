const bcrypt = require('bcrypt');
import { getResults } from '../util/getResults'

/**
 * register a new user.
 * 
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 * @returns {String} - messages with data
 */
const register = async (req, res) => {
    try {
        const { name, pass, email, avatar_url } = req.body
        if (!name || !pass || !email || !avatar_url) {
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

/**
 * log a uear into the system
 * 
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @returns {String} - messages with data
 */
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

/**
 * get all the users that are currentlly logged in
 * to the system.
 * 
 * @param {*} req - request object
 * @param {*} res - response object
 * 
 * @returns {String} - message and data
 */

const getAllUsers = async (req, res) => {
    try {
        const sql = /*sql*/`
            select u.name,
                   u.email,
                   u.avatar_url,
            from users u
        `;
        const results = getResults(sql);

        return res.status(202).send({
            message: 'successfully retrieved all users',
            data: results
        })
    } catch (err) {
        console.error(err);
        return res.status(503).send({
            message: 'internal server error'
        })
    }
}

/**
 * get a single user from the database
 * 
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns 
 */
const getSingleUser = async (req, res) => {
    try {
        const { user_id, name } = req.params;

        if (!user_id) {
            return res.status(403).send({
                message: 'user id is required'
            })
        }

        if (!name) {
            return res.status(403).send({
                message: 'name is required'
            })
        }

        const user = await getResults(sql, [user_id, name]);

        return res.status(200).send({
            message: 'successfully retrieved a user',
            data: user
        })
    } catch (err) {
        console.error(err);
        return res.status(503).send({
            message: 'internal server error'
        })
    }
}

/**
 * update a particular user with the specified id
 * 
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns {string} - message and data
 */
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

        const results = await getResults(sql, [user_id, name, email, updated_at]);

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

/**
 * remvoe a user from the database.
 * 
 * @param {*} req - request object
 * @param {*} res - response object
 * @returns {string} - message
 */
const removeUser = async (req, res) => {
    try {
        const { name } = req.body
        const sql = /*sql*/`
            delete from users
            where name=?
        `;

        const results = await getResults(sql, [name]);

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
/**
 * export all the route handlers defined above
 */
module.exports = {
    register,
    login,
    getAllUsers,
    getSingleUser,
    updateUser,
    removeUser
}