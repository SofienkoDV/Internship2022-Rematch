/* eslint-disable no-underscore-dangle */
const TaskModel = require('./model');
const UserModel = require('../Users/model');

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
        status: 'in-progress',
    });

    return taskModel.save();
}

async function updateTaskService(taskId, task) {
    const {
        assignee, title, description, estimatedTime, createdBy, status,
    } = task;

    const taskModel = await TaskModel.findById(taskId);

    taskModel.assignee = assignee;
    taskModel.title = title;
    taskModel.description = description;
    taskModel.estimatedTime = estimatedTime;
    taskModel.createdBy = createdBy;
    taskModel.status = status;

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

async function getAllTasksService(userId) {
    const user = await UserModel.findById(userId);
    const tasks = await TaskModel.aggregate([
        {
            $match: {
                assignee: user._id,
            },
        },
        {
            $sort: {
                estimatedTime: -1,
            },
        },
        {
            $lookup: {
                from: 'users',
                localField: 'assignee',
                foreignField: '_id',
                as: 'assignee',
            },
        },
        {
            $unwind: {
                path: '$assignee',
                preserveNullAndEmptyArrays: true,
            },
        },
        {
            $project: {
                _id: 1,
                title: 1,
                description: 1,
                estimatedTime: 1,
                createdBy: 1,
                status: 1,
                assignee: {
                    _id: 1,
                    name: 1,
                },
            },
        },
    ]);

    const totalTasks = await TaskModel.countDocuments({
        assignee: user._id,
    });

    const totalEstimation = await TaskModel.aggregate([
        {
            $match: {
                assignee: user._id,
            },
        },
        {
            $group: {
                _id: null,
                totalEstimation: {
                    $sum: '$estimatedTime',
                },
            },
        },
    ]);

    return {
        tasks,
        name: `${user.firstName} ${user.lastName}`,
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
