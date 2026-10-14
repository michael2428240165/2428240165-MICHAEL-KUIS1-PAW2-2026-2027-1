import express from 'express'

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'
import AnggotaController from '../controllers/anggota.controller.js'

const router = express.Router()

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)
router.get('/anggota', AnggotaController.index)
router.get('/anggota/:id', AnggotaController.show)
router.post('/anggota', AnggotaController.store)
router.put('/anggota/:id', AnggotaController.update)
router.delete('/anggota/:id', AnggotaController.delete)

export default router