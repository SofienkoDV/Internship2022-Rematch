/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

import UserModel from './Schema.js';

const register = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            email, password, fullName, avatarUrl,
        } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email,
            passwordHash: hashedPassword,
            fullName,
            avatarUrl,
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
            },
            'secret',
            {
                expiresIn: '1h',
            },
        );

        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                fullName: user.fullName,
                avatarUrl: user.avatarUrl,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Невдала спроба реєстрації' });
    }
};

const login = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Користувача не знайдено' });
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch) {
            return res.status(400).json({ message: 'Невірний логін або пароль' });
        }

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
            },
            'secret',
            {
                expiresIn: '1h',
            },
        );

        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                fullName: user.fullName,
                avatarUrl: user.avatarUrl,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Невдала спроба авторизації' });
    }
};

const verify = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId);

        if (!user) {
            return res.status(400).json({ message: 'Користувача не знайдено' });
        }

        res.json({
            user: {
                _id: user._id,
                email: user.email,
                fullName: user.fullName,
                avatarUrl: user.avatarUrl,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Невдала спроба авторизації' });
    }
};

export default { register, login, verify };