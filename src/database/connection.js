import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    return console.error(
      "Não foi possível conectar com o banco de dados :(",
      error
    );
  }
};

sequelize.sync({ force: true });

export { sequelize, testConnection };
