import { Sequelize } from "sequelize";

// Conectar a la base de datos
const db = new Sequelize('agenciaviajes', 'root', 'admin', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;