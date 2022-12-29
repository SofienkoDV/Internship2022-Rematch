const URL = 'mongodb+srv://Admin:Den055037@cluster0.e5xbnau.mongodb.net/internship2022-backend?retryWrites=true&w=majority';

module.exports = {
    mongodb: {
        url: URL,
        databaseName: 'internship2022-backend',

        options: {
            useNewUrlParser: true,
        },
    },

    migrationsDir: 'migrations',

    changelogCollectionName: 'changelog',

    migrationFileExtension: '.js',

    useFileHash: false,

    moduleSystem: 'esm',
};
