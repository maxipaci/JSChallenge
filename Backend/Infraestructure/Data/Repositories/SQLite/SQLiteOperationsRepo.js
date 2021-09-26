const Operation = require(process.cwd() + '\\Core\\Models\\Operation.js');
const OperationTypeEnum = require(process.cwd() + '\\Core\\Enums\\OperationTypeEnum.js');
const { v4: uuidv4 } = require('uuid');
const { QueryTypes } = require('sequelize');

class SQLiteOperationsRepo {
    constructor(db) {
        this.db = db;
    }

    async connect(){
        try{
            await this.db.authenticate();
            console.log("connected...");
        } catch(e){
            console.log(e);
        }
    }

    async getById(id){
        await this.connect();
        const operations = await this.db.query("SELECT * FROM `Operations` WHERE id = '" + id + "'",
         { type: QueryTypes.SELECT });
        if(operations.length == 0){
            return undefined
        }
        return operations[0];
    }

    nextId() {
        return uuidv4();
    }

    async getAll(){
        await this.connect();
        const operations = await this.db.query("SELECT * FROM `Operations`",
         { type: QueryTypes.SELECT });
        return operations;
    }

    async add(operation){
        await this.connect();
        await this.db.query("INSERT INTO `Operations` VALUES('" + operation.id + "', '" +
         operation.concept +"', " + operation.amount + ", '" +
         operation.date.toISOString().slice(0, 19).replace('T', ' ') + "', " + operation.typeId + ")", 
        { type: QueryTypes.INSERT });;
    }

    async delete(id){
        await this.connect();
        await this.db.query("DELETE FROM `Operations` WHERE id = '" + id + "'",
         { type: QueryTypes.DELETE });;
    }

    async update(operation){
        await this.connect();
        await this.db.query("UPDATE `Operations` SET concept = '" + operation.concept + "', amount = " +
        operation.amount + ", date = '" +
         new Date(operation.date).toISOString().slice(0, 19).replace('T', ' ') + "' WHERE id = '" + operation.id + "'",
         { type: QueryTypes.SELECT });
        return operation;
    }

}

module.exports = SQLiteOperationsRepo;