const TaskModel = require('./model');

async function createTaskService(task) {
    const {
        assignee, title, description, estimatedTime, createdBy,
    } = task;

    const taskModel = new TaskModel({
        assignee,
        title,
        description,
        estimatedTime,
        createdBy,
    });

    return taskModel.save();
}

async function updateTaskService(taskId, task) {
    const {
        assignee, title, description, estimatedTime, createdBy,
    } = task;

    const taskModel = await TaskModel.findById(taskId);

    taskModel.assignee = assignee;
    taskModel.title = title;
    taskModel.description = description;
    taskModel.estimatedTime = estimatedTime;
    taskModel.createdBy = createdBy;

    return taskModel.save();
}

async function getTasksService(page) {
    const tasks = await TaskModel.find().skip(page * 5).limit(5);
    const totalTasks = await TaskModel.countDocuments();

    return {
        tasks,
        totalTasks,
    };
}

async function getAllTasksService() {
    const tasks = await TaskModel.find();
    const totalTasks = await TaskModel.countDocuments();
    const totalEstimation = await TaskModel.aggregate([
        {
            $group: {
                _id: null,
                totalEstimation: { $sum: '$estimatedTime' },
            },
        },
    ]);

    return {
        tasks,
        name: 'All tasks',
        totalTasks,
        totalEstimation: totalEstimation[0].totalEstimation,
    };
}

async function getTaskService(taskId) {
    const task = await TaskModel.findById(taskId);

    return task;
}

async function deleteTaskService(taskId) {
    const task = await TaskModel.findById(taskId);

    return task.remove();
}

module.exports = {
    createTaskService,
    updateTaskService,
    getTasksService,
    getAllTasksService,
    getTaskService,
    deleteTaskService,
};
