/* eslint-disable import/extensions */
import UsersService from './service.js';

async function userRegister(req, res) {
    try {
        const user = await UsersService.register(req.body);

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function userLogin(req, res) {
    try {
        const user = await UsersService.login(req.body);

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function userVerify(req, res) {
    try {
        const user = await UsersService.verify(req.user);

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function userUpdate(req, res) {
    try {
        const user = await UsersService.update(req.user, req.body);

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function userRemove(req, res) {
    try {
        const user = await UsersService.remove(req.user);

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    userRegister,
    userLogin,
    userVerify,
    userUpdate,
    userRemove,
};
