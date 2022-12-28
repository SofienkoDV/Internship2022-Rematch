/* eslint-disable no-unused-vars */
module.exports = {
    async up(db, client) {
        const collection = db.collection('tasks');

        await collection.updateMany(
            { estimatedTime: { $gt: 10 } },
            { $set: { status: 'done' } },
        );

        await collection.updateMany(
            { estimatedTime: { $lte: 10 } },
            { $set: { status: 'in-progress' } },
        );
    },

    async down(db, client) {
        const collection = db.collection('tasks');

        await collection.updateMany({}, { $unset: { status: '' } });
    },
};
