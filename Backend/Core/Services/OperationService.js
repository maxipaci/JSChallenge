const OperationTypeEnum = require('../Enums/OperationTypeEnum.js');

class OperationService{

    constructor(operationsRepo){
        this.operationsRepo = operationsRepo;
    }

    async getOperations(){
        let operations = await this.operationsRepo.getAll();
        return operations;
    }

    async addOperation(operation){
        if(Object.values(OperationTypeEnum).indexOf(operation.typeId) == -1){
            throw new Error("Invalid typeId")
        }

        operation.id = await this.operationsRepo.nextId();
        operation.date = new Date();
        await this.operationsRepo.add(operation);
        return operation;
    }
}

module.exports = OperationService;