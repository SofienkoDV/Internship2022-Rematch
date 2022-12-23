const { Schema } = require('mongoose');
const connection = require('../../config/mongoConnection');

const taskSchema = new Schema(
    {
        assignee: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        estimatedTime: {
            type: Number,
            required: true,
        },
        createdBy: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const TaskModel = connection.model('Task', taskSchema);

module.exports = TaskModel;
