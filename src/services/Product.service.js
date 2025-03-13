import { ERRORS, SUCESS } from "../shared/messages/product.message.js";
import { ProductEntity } from "../entities/product.entity.js";
import { UserEntity } from "../entities/user.entity.js";
import bcrypt from "bcryptjs";
import { Sequelize } from "sequelize";

class ProductService {
  // FUNÇÃO DE CADASTRAR PRODUTO
  async createProductService(userId, name, brand, quantity, price) {
    try {
      await ProductEntity.sync();
      const verifyProductExists = await ProductEntity.findOne({
        where: {
          userId,
          name,
          brand,
        },
      });
      if (verifyProductExists) {
        return `${ERRORS.ALREADY_EXISTS}`;
      }
      const product = await ProductEntity.create({
        userId,
        name,
        brand,
        quantity,
        price,
      });
      return `${SUCESS.CREATED}`;
    } catch (error) {
      return console.error("Não foi possível cadastrar o produto:", error);
    }
  }

  // FUNÇÃO DE LISTAR TODOS OS PRODUTOS
  async getUserProducts(userId) {
    try {
      const products = await ProductEntity.findAll({
        where: {
          userId,
        },
      });
      return products;
    } catch (error) {
      return console.error("Não foi possível buscar os produtos:", error);
    }
  }

  //FUNCAO DE LISTAR OS PRODUTOS POR ID
  async getUserProductById(userId, id) {
    try {
      const user = await UserEntity.findOne({
        where: {
          id: userId,
        },
      });
      if (!user) {
        return "Usuário não encontrado. Tente novamente!";
      }
      const product = await ProductEntity.findOne({
        where: {
          id,
        },
      });
      if (!product) {
        return `${ERRORS.NOT_FOUND}`;
      }
      return product;
    } catch (error) {
      return console.error("Não foi possível buscar o produto por ID:", error);
    }
  }

  // FUNCAO DE LISTAR PRODUTO PELO NOME
  async getUserProductByName(userId, name) {
    try {
      const user = await UserEntity.findOne({
        where: {
          id: userId,
        },
      });
      if (!user) {
        return "Usuário não encontrado. Tente novamente!";
      }
      const product = await ProductEntity.findAll({
        where: {
          userId,
          name: {
            [Sequelize.Op.iLike]: `%${name}%`,
          },
        },
      });
      if (!product) {
        return `${ERRORS.NOT_FOUND}`;
      }
      return product;
    } catch (error) {
      return console.error(
        "Não foi possível buscar o produto por nome:",
        error
      );
    }
  }

  async getUserProductByBrandService(userId, brand) {
    try {
      const user = await UserEntity.findOne({
        where: {
          id: userId,
        },
      });
      if (!user) {
        return "Usuário não encontrado. Tente novamente!";
      }
      const product = await ProductEntity.findAll({
        where: {
          userId,
          brand: {
            [Sequelize.Op.iLike]: `%${brand}%`,
          },
        },
      });
      if (!product) {
        return `${ERRORS.NOT_FOUND}`;
      }
      return product;
    } catch (error) {
      return console.error(
        "Não foi possível buscar o produto por marca:",
        error
      );
    }
  }

  async updateProductService(
    userId,
    id,
    newName,
    newBrand,
    newQuantity,
    newPrice
  ) {
    try {
      const user = await UserEntity.findByPk(userId);
      if (!user) {
        return "Usuário não encontrado. Tente novamente!";
      }
      const product = await ProductEntity.findOne({
        where: {
          id,
          userId
        },
      });

      if (!product) {
        return `${ERRORS.NOT_FOUND}`;
      }

      await ProductEntity.update(
        {
          name: newName,
          brand: newBrand,
          quantity: newQuantity,
          price: newPrice,
        },
        {
          where: {
            id,
          },
        }
      );
      return "Produto atualizado com sucesso!";
    } catch (error) {
      return console.error("Não foi possível atualizar o produto:", error);
    }
  }

  // FUNÇÃO DE EXCLUIR PRODUTO
  async deleteProductService(userId, id) {
    try {
      const user = await UserEntity.findByPk(userId);
      if (!user) {
        return `${ERRORS.NOT_FOUND}`;
      }

      const product = await ProductEntity.findOne({
        where: {
          id,
          userId,
        },
      });

      if (!product) {
        return `${ERRORS.NOT_FOUND}`;
      }

      await ProductEntity.destroy({
        where: {
          id,
        },
      });

      return `${SUCESS.DELETED}`;
    } catch (error) {
      return console.error("Não foi possível excluir o produto:", error);
    }
  }
}

export { ProductService };
