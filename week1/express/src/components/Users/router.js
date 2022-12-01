import { Router } from 'express';
import { registerValidation, loginValidation } from './validations.js';

import userController from './userController.js';
import checkAuth from '../../config/checkAuth.js';
import handleValidationErrors from '../../config/handleValidationErrors.js';

const router = Router();

router.post('/register', registerValidation, handleValidationErrors, userController.register);

router.post('/login', loginValidation, handleValidationErrors, userController.login);
router.get('/verify', checkAuth, userController.verify);

router.put('/update', checkAuth, userController.update);
router.delete('/remove', checkAuth, userController.remove);

export default router;
