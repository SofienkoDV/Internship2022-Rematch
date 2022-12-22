/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */

const jwt = require('jsonwebtoken');
const UserModel = require('./model');

function generateAccessToken(user) {
    const payload = {
        userId: user._id,
        email: user.email,
    };

    return jwt.sign(payload, 'secret', {
        expiresIn: '1h',
    });
}

async function register(userData) {
    const { email, passwordHash, fullName } = userData;

    const user = await UserModel.findOne({ email });

    if (user) {
        throw new Error('User with this email already exists');
    } else {
        const newUser = await UserModel.create({
            email,
            passwordHash,
            fullName,
        });

        return newUser;
    }
}

async function login(userData) {
    const { email, passwordHash } = userData;

    const user = await UserModel.findOne({
        email,
    });

    if (!user) {
        throw new Error('User with this email does not exist');
    }

    const isPasswordValid = await user.isValidPassword(passwordHash);

    if (!isPasswordValid) {
        throw new Error('Password is not valid');
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
    const { email, passwordHash, fullName } = userData;

    const updatedUser = await UserModel.findByIdAndUpdate(
        user.userId,
        {
            email,
            passwordHash,
            fullName,
        },
        {
            new: true,
        },
    );

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
