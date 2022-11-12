const fs = require('fs');

function findAll() {
    const users = fs.readFileSync('./src/components/Users/users.json', 'utf8');

    return JSON.parse(users);
}

function findById(id) {
    const users = findAll();

    return users.find((user) => user.id === id);
}

function create(user) {
    const users = findAll();

    const newUser = {
        id: Date.now().toString(),
        ...user,
    };

    users.push(newUser);

    fs.writeFileSync('./src/components/Users/users.json', JSON.stringify(users));

    return newUser;
}

function update(id, user) {
    const users = findAll();

    const index = users.findIndex((client) => client.id === id);

    if (index === -1) {
        throw new Error('User not found');
    }

    users[index] = {
        ...users[index],
        ...user,
    };

    fs.writeFileSync('./src/components/Users/users.json', JSON.stringify(users));

    return users[index];
}

function remove(id) {
    const users = findAll();

    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        throw new Error('User not found');
    }

    const deletedUser = users.splice(index, 1)[0];

    fs.writeFileSync('./src/components/Users/users.json', JSON.stringify(users));

    return deletedUser;
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
};
