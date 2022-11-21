import { body } from 'express-validator';

export const registerValidation = [
    body('email').isEmail().withMessage('Email is not valid'),

    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])/)
        .withMessage(
            'Password must contain at least one uppercase and one lowercase letter',
        ),

    body('fullName').notEmpty().withMessage('Full name is required'),

    body('avatarUrl').optional().isURL().withMessage('Avatar URL is not valid'),
];

export const loginValidation = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').notEmpty().withMessage('Password is required'),
];
