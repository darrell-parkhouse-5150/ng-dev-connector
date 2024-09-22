const express = require('express')
const router = express.Router()

import {
    login,
    register
} from '../controller/user.controller.mjs'
const baseUrl = 'http://localhost'

router.post(`${baseUrl}/api/user/:user_id`, register);
router.post(`${baseUrl}/api/user/login`, login);

module.exports = router