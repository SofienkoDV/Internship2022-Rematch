/* eslint-disable import/extensions */
import { Router } from 'express';
import { registerValidation, loginValidation } from './Validations.js';

import UsersComponent from './UsersComponent.js';
import checkAuth from './checkAuth.js';

const router = Router();

router.post('/register', registerValidation, UsersComponent.register);

router.post('/login', loginValidation, UsersComponent.login);

router.get('/verify', checkAuth, UsersComponent.verify);

export default router;
