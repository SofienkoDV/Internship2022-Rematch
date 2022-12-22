const { Router } = require('express');
const { registerValidation, loginValidation } = require('./validations');
const handleValidationErrors = require('../../config/handleValidationErrors');
const checkAuth = require('../../config/checkAuth');
const userComponent = require('./index');

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

module.exports = router;
