const TaskModel = require('./model');

async function createTask(taskData) {
    const task = await TaskModel.create(taskData);

    return task;
}

async function updateTask(taskId, taskData) {
    const task = await TaskModel.findByIdAndUpdate(
        taskId,
        {
            $set: taskData,
        },
        {
            new: true,
        },
    );

    return task;
}

async function getTasks(page) {
    const tasks = await TaskModel.find().skip(page * 5).limit(5);
    const totalTasks = await TaskModel.countDocuments();

    return {
        tasks,
        totalTasks,
    };
}

async function getAllTasks() {
    const tasks = await TaskModel.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'assignee',
                foreignField: '_id',
                as: 'assignee',
            },
        },
        {
            $unwind: '$assignee',
        },
        {
            $addFields: {
                assignee: '$assignee.name',
            },
        },
        {
            $sort: {
                estimatedTime: -1,
            },
        },
    ]);
    const totalTasks = await TaskModel.countDocuments();
    const totalEstimation = await TaskModel.aggregate([
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
        totalTasks,
        totalEstimation,
    };
}

module.exports = {
    createTask,
    updateTask,
    getTasks,
    getAllTasks,
};
