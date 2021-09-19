class OperationService{

    constructor(operationsRepo){
        this.operationsRepo = operationsRepo;
    }

    async getOperations(){
        let operations = await this.operationsRepo.getAll();
        return operations;
    }

    async addOperation(operation){
        operation.id = await this.operationsRepo.nextId();
        operation.date = new Date();
        await this.operationsRepo.add(operation);
        return operation;
    }
}

module.exports = OperationService;