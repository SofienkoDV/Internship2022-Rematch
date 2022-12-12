/* eslint-disable import/extensions */
import { Router } from 'express';
import { registerValidation, loginValidation } from './validations.js';
import handleValidationErrors from '../../config/handleValidationErrors.js';
import checkAuth from '../../config/checkAuth.js';
import userComponent from './index.js';

const router = Router();

router.post(
    '/register',
    registerValidation,
    handleValidationErrors,
    userComponent.userRegister,
);

router.post(
    '/login',
    loginValidation,
    handleValidationErrors,
    userComponent.userLogin,
);

router.get('/verify', checkAuth, userComponent.userVerify);

router.put('/update', checkAuth, userComponent.userUpdate);

router.delete('/remove', checkAuth, userComponent.userRemove);

export default router;
