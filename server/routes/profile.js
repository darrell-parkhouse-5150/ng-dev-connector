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

router.post(`${baseUrl}/api/user/:userId/profile`, createProfile)
router.get(`${baseUrl}/api/user/:userId/profile`, getUserProfile)
router.get(`${baseUrl}/api/users/profile`, getAllProfiles)
router.put(`${baseUrl}/api/user/:userId/profile`, updateProfile)
router.delete(`${baseUrl}/api/user/:userId/profile`, deleteProfile)

module.exports = router