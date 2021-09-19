const OperationType = require(process.cwd() + '\\Core\\Models\\OperationType.js');
const OperationTypeEnum = require(process.cwd() + '\\Core\\Enums\\OperationTypeEnum.js');

class InMemoryOperationTypesRepo {
    constructor() {
        this.operationTypes = [
            new OperationType(OperationTypeEnum.INGRESO, "Ingreso"),
            new OperationType(OperationTypeEnum.EGRESO, "Egreso")
        ];
    }

    getById(id){
        return this.operationTypes.find(op => op.id == id);
    }

    getAll(){
        return this.operationTypes;
    }

}

module.exports = InMemoryOperationTypesRepo;