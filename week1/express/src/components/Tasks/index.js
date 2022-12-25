const TasksService = require('./service');

async function createTask(req, res) {
    try {
        const task = await TasksService.createTaskService(req.body);

        res.status(201).json({ data: task });
    } catch (error) {
        res.status(500).json({ message: error.message, details: null });
    }
}

async function updateTask(req, res) {
    try {
        const task = await TasksService.updateTaskService(req.params.id, req.body);

        res.status(200).json({ data: task });
    } catch (error) {
        res.status(500).json({ message: error.message, details: null });
    }
}

async function getTasks(req, res) {
    try {
        const tasks = await TasksService.getTasksService(req.query.page);

        res.status(200).json({ data: tasks });
    } catch (error) {
        res.status(500).json({ message: error.message, details: null });
    }
}

async function getAllTasks(req, res) {
    try {
        const tasks = await TasksService.getAllTasksService();

        res.status(200).json({ data: tasks });
    } catch (error) {
        res.status(500).json({ message: error.message, details: null });
    }
}

async function getTask(req, res) {
    try {
        const task = await TasksService.getTaskService(req.params.id);

        res.status(200).json({ data: task });
    } catch (error) {
        res.status(500).json({ message: error.message, details: null });
    }
}

async function deleteTask(req, res) {
    try {
        await TasksService.deleteTaskService(req.params.id);

        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message, details: null });
    }
}

module.exports = {
    createTask,
    updateTask,
    getTasks,
    getAllTasks,
    getTask,
    deleteTask,
};
