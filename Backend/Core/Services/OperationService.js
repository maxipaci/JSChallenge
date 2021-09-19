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

    async deleteOperation(id){
        const op = await this.operationsRepo.getById(id);

        if(op == null){
            throw new Error("Invalid operation ID (" + id + ")");
        }

        await this.operationsRepo.delete(id);
    }

    async updateOperation(operation){
        if(Object.values(OperationTypeEnum).indexOf(operation.typeId) == -1){
            throw new Error("Invalid typeId")
        }

        let op = await this.operationsRepo.getById(operation.id);

        if(op == null){
            throw new Error("Invalid operation ID (" + operation.id + ")");
        }

        op = await this.operationsRepo.update(operation);
        return op;
    }
}

module.exports = OperationService;