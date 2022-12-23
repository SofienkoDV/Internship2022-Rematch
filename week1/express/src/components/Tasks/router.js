const { Router } = require('express');
const { createTaskValidation } = require('./validations');
const handleValidationErrors = require('../../config/handleValidationErrors');
const checkAuth = require('../../config/checkAuth');
const taskComponent = require('./index');

const router = Router();

router.post(
    '/create',
    checkAuth,
    createTaskValidation,
    handleValidationErrors,
    taskComponent.taskCreate,
);

router.put(
    '/update/:id',
    checkAuth,
    createTaskValidation,
    handleValidationErrors,
    taskComponent.taskUpdate,
);

router.get('/get/:page', checkAuth, taskComponent.taskGet);

router.get('/get-all', checkAuth, taskComponent.taskGetAll);

module.exports = router;
