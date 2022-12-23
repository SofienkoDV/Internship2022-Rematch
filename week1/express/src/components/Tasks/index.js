const TasksService = require('./service');

async function taskCreate(req, res) {
    try {
        const task = await TasksService.createTask(req.body);

        res.status(200).json({ task });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function taskUpdate(req, res) {
    try {
        const task = await TasksService.updateTask(req.params.id, req.body);

        res.status(200).json({ task });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function taskGet(req, res) {
    try {
        const { tasks, totalTasks } = await TasksService.getTasks(req.params.page);

        res.status(200).json({ tasks, totalTasks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function taskGetAll(req, res) {
    try {
        const { tasks, totalTasks } = await TasksService.getAllTasks();

        res.status(200).json({ tasks, totalTasks });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    taskCreate,
    taskUpdate,
    taskGet,
    taskGetAll,
};
