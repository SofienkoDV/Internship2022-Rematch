const { body } = require('express-validator');

const createTaskValidation = [
    body('title')
        .exists()
        .withMessage('Title is required')
        .isString()
        .withMessage('Title must be a string')
        .isLength({ min: 3, max: 50 })
        .withMessage('Title must be between 3 and 50 characters'),
    body('description')
        .exists()
        .withMessage('Description is required')
        .isString()
        .withMessage('Description must be a string')
        .isLength({ min: 3, max: 500 })
        .withMessage('Description must be between 3 and 500 characters'),
    body('estimatedTime')
        .exists()
        .withMessage('Estimated time is required')
        .isNumeric()
        .withMessage('Estimated time must be a number'),
    body('assignee')
        .exists()
        .withMessage('Assignee is required')
        .isMongoId()
        .withMessage('Assignee must be a valid Mongo ID'),
];

module.exports = {
    createTaskValidation,
};
