/* eslint-disable no-return-await */
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
        avatarUrl: String,
    },
    {
        timestamps: true,
    },
);

userSchema.pre('save', async function preSave(next) {
    if (this.isModified('passwordHash')) {
        this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
    }

    next();
});

userSchema.methods.isValidPassword = async function isValidPassword(password) {
    return await bcrypt.compare(password, this.passwordHash);
};

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
