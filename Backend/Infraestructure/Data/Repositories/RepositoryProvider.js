const InMemoryOperationsRepo = require("./InMemory/InMemoryOperationsRepo");

class RepositoryProvider {
    constructor() {
        this.operationRepo = new InMemoryOperationsRepo();
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
}

module.exports = RepositoryProvider;