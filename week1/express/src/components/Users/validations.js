import { body } from 'express-validator';

export const registerValidation = [
    body('email').isEmail().withMessage('Email is not valid'),

    body('passwordHash')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)
        .withMessage(
            'Password must contain at least 8 characters, one uppercase, one lowercase and one number',
        ),

    body('fullName').notEmpty().withMessage('Full name is required'),

    body('avatarUrl').optional().isURL().withMessage('Avatar URL is not valid'),
];

export const loginValidation = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('passwordHash').notEmpty().withMessage('Password is required'),
];
