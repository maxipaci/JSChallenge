const InMemoryOperationsRepo = require("./InMemory/InMemoryOperationsRepo");
const InMemoryOperationTypesRepo = require("./InMemory/InMemoryOperationTypesRepo");
const SQLiteOperationTypesRepo = require("./SQLite/SQLiteOperationTypesRepo");
const SQLiteOperationsRepo = require("./SQLite/SQLiteOperationsRepo");
const { Sequelize } = require('sequelize');
const config = require(process.cwd() + '\\Config.js');

class RepositoryProvider {
    constructor() {
        /* this.operationRepo = new InMemoryOperationsRepo();
        this.operationTypeRepo = new InMemoryOperationTypesRepo(); */


        this.db = new Sequelize({
            dialect: 'sqlite',
            storage: process.cwd() + "\\Infraestructure\\Data\\Storage\\" + config.dbName
        });
        this.operationRepo = new SQLiteOperationsRepo(this.db);
        this.operationTypeRepo = new SQLiteOperationTypesRepo(this.db);
        
    }

    static getInstance() {
        if (!RepositoryProvider.instance) {
            RepositoryProvider.instance = new RepositoryProvider();
        }
        return RepositoryProvider.instance;
    }

    getOperationRepo() {
        return this.operationRepo;
    }

    getOperationTypeRepo() {
        return this.operationTypeRepo;
    }
}

module.exports = RepositoryProvider;