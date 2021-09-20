const InMemoryOperationsRepo = require("./InMemory/InMemoryOperationsRepo");
const InMemoryOperationTypesRepo = require("./InMemory/InMemoryOperationTypesRepo");

class RepositoryProvider {
    constructor() {
        this.operationRepo = new InMemoryOperationsRepo();
        this.operationTypeRepo = new InMemoryOperationTypesRepo();
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