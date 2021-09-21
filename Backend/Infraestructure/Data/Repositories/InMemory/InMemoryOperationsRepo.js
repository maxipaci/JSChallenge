const Operation = require(process.cwd() + '\\Core\\Models\\Operation.js');
const OperationTypeEnum = require(process.cwd() + '\\Core\\Enums\\OperationTypeEnum.js');

class InMemoryOperationsRepo {
    constructor() {
        this.operations = [
            new Operation(1, "comida", 500, new Date(), OperationTypeEnum.EGRESO),
            new Operation(2, "nafta", 200, new Date(), OperationTypeEnum.EGRESO),
            new Operation(3, "ropa", 150, new Date(), OperationTypeEnum.EGRESO),
            new Operation(4, "impuestos", 400, new Date(), OperationTypeEnum.EGRESO),
            new Operation(5, "comida", 600, new Date(), OperationTypeEnum.EGRESO),
            new Operation(6, "salario", 10000, new Date(), OperationTypeEnum.INGRESO),
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
        this.operations = this.operations.map(op => {
            if (op.id == operation.id) {
                return new Operation(operation.id, operation.concept, operation.amount, operation.date, operation.typeId);
            }

            return op
        });
        console.log(this.operations)
        return operation;
    }

}

module.exports = InMemoryOperationsRepo;