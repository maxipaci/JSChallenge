const Operation = require(process.cwd() + '\\Core\\Models\\Operation.js');
const OperationTypeEnum = require(process.cwd() + '\\Core\\Enums\\OperationTypeEnum.js');

class InMemoryOperationsRepo {
    constructor() {
        this.operations = [
            new Operation(1, "comida", 200, new Date(), OperationTypeEnum.INGRESO)
        ];
    }

    getById(id){
        return this.operations.find(op => op.id == id);
    }

    nextId() {
        return this.operations[this.operations.length - 1].id + 1;
    }

    getAll(){
        return this.operations;
    }

    add(operation){
        this.operations.push(operation);
    }

}

module.exports = InMemoryOperationsRepo;