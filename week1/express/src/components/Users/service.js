const jwt = require('jsonwebtoken');
const UserModel = require('./model');

function generateAccessToken(user) {
    const { _id, email } = user;

    const payload = {
        userId: _id,
        email,
    };

    return jwt.sign(payload, 'secret', {
        expiresIn: '24h',
    });
}

async function register(userData) {
    const user = await UserModel.create(userData);

    const token = generateAccessToken(user);

    return {
        token,
        user,
    };
}

async function login(userData) {
    const { email, passwordHash } = userData;

    const user = await UserModel.findOne({
        email,
    });

    if (!user) {
        throw new Error('User not found');
    }

    const isValidPassword = await user.isValidPassword(passwordHash);

    if (!isValidPassword) {
        throw new Error('Invalid password');
    }

    const token = generateAccessToken(user);

    return {
        token,
        user,
    };
}

async function verify(token) {
    const user = await UserModel.findById(token.userId);

    if (!user) {
        throw new Error('User with this email does not exist');
    }

    return user;
}

async function update(user, userData) {
    const updatedUser = await UserModel.findByIdAndUpdate(user.userId, userData, {
        new: true,
    });

    return updatedUser;
}

async function remove(user) {
    const deletedUser = await UserModel.findByIdAndDelete(user.userId);

    return deletedUser;
}

module.exports = {
    register,
    login,
    verify,
    update,
    remove,
};
