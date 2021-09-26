const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const config = require(process.cwd() + '\\Config.js');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: process.cwd() + "\\Infraestructure\\Data\\Storage\\" + config.dbName
  });

async function main(){
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        const queryInterface = db.getQueryInterface();
        await queryInterface.dropAllTables();
        await createTableOperationTypes(queryInterface);
        await insertTypes(db);
        await createTableOperations(queryInterface);
        await insertOperations(db);
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

async function createTableOperations(queryInterface){
    await queryInterface.createTable('Operations', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        concept: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        date: DataTypes.DATE,
        typeId: {
            type: DataTypes.INTEGER,
            references: {
                model: "OperationTypes",
                key: "id"
            }
        } 
      });
}

async function createTableOperationTypes(queryInterface){
    await queryInterface.createTable('OperationTypes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        description: DataTypes.STRING
      });
}

async function insertTypes(db){
    await db.query("INSERT INTO `OperationTypes` VALUES('1', 'Ingreso')", { type: QueryTypes.INSERT });
    await db.query("INSERT INTO `OperationTypes` VALUES('2', 'Egreso')", { type: QueryTypes.INSERT });
}

async function insertOperations(db){
    await db.query("INSERT INTO `Operations` VALUES('1', 'comida', 500, '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', 2)", 
    { type: QueryTypes.INSERT });
    await db.query("INSERT INTO `Operations` VALUES('2', 'nafta', 200, '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', 2)", 
    { type: QueryTypes.INSERT });
    await db.query("INSERT INTO `Operations` VALUES('3', 'ropa', 150, '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', 2)", 
    { type: QueryTypes.INSERT });
    await db.query("INSERT INTO `Operations` VALUES('4', 'impuestos', 400, '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', 2)", 
    { type: QueryTypes.INSERT });
    await db.query("INSERT INTO `Operations` VALUES('5', 'comida', 600, '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', 2)", 
    { type: QueryTypes.INSERT });
    await db.query("INSERT INTO `Operations` VALUES('6', 'salario', 10000, '" + new Date().toISOString().slice(0, 19).replace('T', ' ') + "', 1)", 
    { type: QueryTypes.INSERT });
}

main();