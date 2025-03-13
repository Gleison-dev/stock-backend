import { RevokedTokenService } from "../services/RevokedToken.service.js";

const instanceRevokedTokenService = new RevokedTokenService();

const logout = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token não fornecido." });
  }
  const user = await instanceRevokedTokenService.logout(token);
  res.status(200).json({ user });
};

export { logout };
