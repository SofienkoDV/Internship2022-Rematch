const bcrypt = require('bcrypt');
const { Schema } = require('mongoose');
const connection = require('../../config/mongoConnection');

const userSchema = new Schema(
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
    const compare = await bcrypt.compare(password, this.passwordHash);

    return compare;
};

const UserModel = connection.model('User', userSchema);

module.exports = UserModel;
