import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { revokedTokenEntity } from "../../../entities/revokedToken.entity.js";

dotenv.config();

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Sem token provido" });
  }

  try {
    const revokedToken = await revokedTokenEntity.findOne({
      where: {
        token,
      },
    });

    if (revokedToken) {
      console.log("token na lista negra:", token);
      return res.status(403).json({ message: "Token inválido ou expirado." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado!" });
  }
};

export { authMiddleware };
