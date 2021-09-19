class OperationService{

    constructor(operationsRepo){
        this.operationsRepo = operationsRepo;
    }

    async getOperations(){
        let operations = await this.operationsRepo.getAll();
        return operations;
    }
}

module.exports = OperationService;