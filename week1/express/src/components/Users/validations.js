const { body } = require('express-validator');

const registerValidation = [
    body('firstName').notEmpty().withMessage('First name is required'),

    body('lastName').notEmpty().withMessage('Last name is required'),

    body('email').isEmail().withMessage('Email is not valid'),

    body('passwordHash')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)
        .withMessage(
            'Password must contain at least 8 characters, one uppercase, one lowercase and one number',
        ),
];

const loginValidation = [
    body('email').isEmail().withMessage('Email is not valid'),

    body('passwordHash').notEmpty().withMessage('Password is required'),
];

module.exports = {
    registerValidation,
    loginValidation,
};
