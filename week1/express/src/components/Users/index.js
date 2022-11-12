const UsersService = require('./service');

async function findAllUsers(req, res) {
    try {
        const users = await UsersService.findAll();

        return res.status(200).json({
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function createUser(req, res) {
    try {
        const user = await UsersService.create(req.body);

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function findUserById(req, res) {
    try {
        const user = await UsersService.findById(req.params.id);

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function updateUser(req, res) {
    try {
        const user = await UsersService.update(req.params.id, req.body);

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function removeUser(req, res) {
    try {
        await UsersService.remove(req.params.id);

        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

module.exports = {
    findAllUsers,
    createUser,
    findUserById,
    updateUser,
    removeUser,
};
