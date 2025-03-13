import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./database/connection.js";
import { router } from "./routes/index.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.SV_PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  testConnection();
  console.log("Servidor rodando!");
});
