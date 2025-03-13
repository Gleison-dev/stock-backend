import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const UserEntity = database.define("tb_users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { UserEntity };