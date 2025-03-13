import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";
import { UserEntity } from "../entities/user.entity.js";

// CRIANDO ENTIDADE COM AS COLUNAS - SEQUELZE

const ProductEntity = database.define("tb_products", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: UserEntity,
      key: "id",
    },
  },
});

ProductEntity.belongsTo(UserEntity, { foreignKey: "userId" });

export { ProductEntity };
