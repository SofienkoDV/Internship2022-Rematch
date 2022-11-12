const { Router } = require('express');
const UsersComponent = require('./index');

const router = Router();

router.get('/', UsersComponent.findAllUsers);

router.post('/user', UsersComponent.createUser);

router.get('/:id', UsersComponent.findUserById);

router.put('/:id', UsersComponent.updateUser);

router.delete('/:id', UsersComponent.removeUser);

module.exports = router;
