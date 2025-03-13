import { UserEntity } from "../entities/user.entity.js";
import { ERRORS, SUCESS } from "../shared/messages/user.message.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class UserService {
  async registerUserService(username, password) {
    try {
      const verifyUserAlreadyExists = await UserEntity.findOne({
        where: {
          username,
        },
      });
      if (verifyUserAlreadyExists) {
        return `${ERRORS.ALREADY_EXISTS}`;
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await UserEntity.create({
        username,
        password: hashedPassword,
      });
      return `${SUCESS.CREATED}`;
    } catch (error) {
      return console.error("Não foi possível cadastrar o usuário:", error);
    }
  }

  async loginUser(username, password) {
    try {
      const user = await UserEntity.findOne({
        where: {
          username,
        },
      });
      if (!user) {
        return `${ERRORS.NOT_FOUND}`;
      }
      const verifyPassword = await bcrypt.compare(password, user.password);
      if (!verifyPassword) {
        return `Senha incorreta. Tente novamente!`;
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return token;
    } catch (error) {
      return console.error("Não foi possível realizar o login:", error);
    }
  }

  async getUsernameService(userId) {
    try {
      const user = await UserEntity.findByPk(userId, {
        attributes: ["username"],
      });
      return user;
    } catch (error) {
      return console.error("Não foi possível buscar as informações:", error);
    }
  }

  async getAllUsersService() {
    try {
      const users = await UserEntity.findAll();
      return users;
    } catch (error) {
      return console.error("Não foi possível listar todos os usuários:", error);
    }
  }

  async deleteUserService(id) {
    try {
      const userId = await UserEntity.findByPk(id);
      if (!userId) {
        return "Não foi possível encontrar o usuário para deletar.";
      }
      await UserEntity.destroy({
        where: {
          id,
        },
      });
      return "Usuário deletado com sucesso!";
    } catch (error) {
      return console.error("Não foi possível deletar o usuário:", error);
    }
  }
}

export { UserService };
