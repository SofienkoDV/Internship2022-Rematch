/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Немає токена' });
    }

    try {
        const decoded = jwt.verify(token, 'secret');

        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Невірний токен' });
    }
};

export default checkAuth;
