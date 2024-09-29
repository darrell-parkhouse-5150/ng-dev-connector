const express = require('express')
const router = express.Router()

import {
    createProfile,
    getUserProfile,
    getAllProfiles,
    updateProfile,
    deleteProfile
} from '../controller/profile.controller'

const baseUrl = 'http://localhost:3000'

router.post(`${baseUrl}/api/users/:userId/profile`, createProfile)
router.get(`${baseUrl}/api/users/:userId/profile`, getUserProfile)
router.get(`${baseUrl}/api/users/:userId/profile`, getAllProfiles)
router.put(`${baseUrl}/api/users/:userId/profile`, updateProfile)
router.delete(`${baseUrl}/api/user/:userId/profile`, deleteProfile)

module.exports = router