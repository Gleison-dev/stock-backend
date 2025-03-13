import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const revokedTokenEntity = database.define("tb_tokens", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export { revokedTokenEntity };
