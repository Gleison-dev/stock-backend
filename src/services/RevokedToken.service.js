import { revokedTokenEntity } from "../entities/revokedToken.entity.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class RevokedTokenService {
  async logout(token) {
    try {
      await revokedTokenEntity.sync();
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const expirationDate = new Date(decoded.exp * 1000);
      await revokedTokenEntity.create({ token, expiresAt: expirationDate });
      return "Logout realizado com sucesso!";
    } catch (error) {
      return console.error("Não foi possível fazer o logout:", error);
    }
  }
}

export { RevokedTokenService };
