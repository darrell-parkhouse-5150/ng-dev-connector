const express = require('express')
const router = express.Router()

import {
    login,
    register,
    getAllUsers,
    getSingleUser,
    updateUser,
    removeUser
} from '../controller/user.controller.mjs'
const baseUrl = 'http://localhost'

router.post(`${baseUrl}/api/user/:user_id`, register);
router.post(`${baseUrl}/api/user/login`, login);

router.get(`${baseUrl}/api/`, getAllUsers);
router.get(`${baseUrl}/api/user/:user_id`, getSingleUser);

router.update(`${baseUrl}/api/user/:user_id`, updateUser)
router.delete(`${baseUrl}/api/user/:user_id`, removeUser)

module.exports = router