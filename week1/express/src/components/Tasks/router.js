const { Router } = require('express');
const { createTaskValidation } = require('./validations');
const handleValidationErrors = require('../../config/handleValidationErrors');
const checkAuth = require('../../config/checkAuth');
const taskComponent = require('./index');

const router = Router();

router.post('/create', checkAuth, createTaskValidation, handleValidationErrors, taskComponent.createTask);
router.put('/update/:id', checkAuth, taskComponent.updateTask);
router.get('/get', checkAuth, taskComponent.getTasks);
router.get('/get-all', checkAuth, taskComponent.getAllTasks);
router.get('/get/:id', checkAuth, taskComponent.getTask);
router.delete('/delete/:id', checkAuth, taskComponent.deleteTask);

module.exports = router;
