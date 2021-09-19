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
        return this.operations.length > 0 ? this.operations[this.operations.length - 1].id + 1 : 1;
    }

    getAll(){
        return this.operations;
    }

    add(operation){
        this.operations.push(operation);
    }

    delete(id){
        this.operations = this.operations.filter(op => op.id != id);
    }

    update(operation){
        this.operations.map(op => {
            if (op.id == operation.id) {
                op = operation;
            }
        });
        return operation;
    }

}

module.exports = InMemoryOperationsRepo;