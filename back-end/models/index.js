import { Sequelize } from "sequelize";
import auteurModel from './auteur.model.js'
import livreModel from "./livre.model.js";
import { env } from '../config/env.js';

const connection = new Sequelize(
    env.DB_NAME,
    env.DB_USER,
    env.DB_PASSWORD,
    {
        host: env.DB_HOST,
        dialect: env.DB_DIALECT
    }
  );

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

livreModel(connection, Sequelize);
auteurModel(connection, Sequelize);

const {
    Auteur,
    Livre
} = connection.models;

Auteur.hasMany(Livre);
Livre.belongsTo(Auteur);

await connection.sync();

console.log('La synchonrisation de la base de données est OK');

export {
    Auteur,
    Livre
}