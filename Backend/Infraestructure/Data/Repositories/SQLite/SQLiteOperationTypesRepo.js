const OperationType = require(process.cwd() + '\\Core\\Models\\OperationType.js');
const OperationTypeEnum = require(process.cwd() + '\\Core\\Enums\\OperationTypeEnum.js');
const { QueryTypes } = require('sequelize');

class SQLiteOperationTypesRepo {
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
        const operationTypes = await this.db.query("SELECT * FROM `OperationTypes` WHERE id = '" + id + "'",
         { type: QueryTypes.SELECT });
        if(operationTypes.length == 0){
            return undefined
        }
        return operationTypes[0];
    }

    async getAll(){
        await this.connect();
        const operationTypes = await this.db.query("SELECT * FROM `OperationTypes`",
         { type: QueryTypes.SELECT });
        return operationTypes;
    }

}

module.exports = SQLiteOperationTypesRepo;