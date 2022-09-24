import express from 'express'
import { registerUser, authUser, getUserProfile, updateUserProfile } from '../controllers/userController.js'
const router = express.Router()
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').get( protect, getUserProfile ).put(protect, updateUserProfile)

export default router