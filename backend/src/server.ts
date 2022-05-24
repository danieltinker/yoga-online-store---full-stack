import express, { response } from "express";
import cors from "cors";
import { sample_packages, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";
import packRouter from "./router/pack.router";
import userRouter from "./router/user.router";
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use("/api/packs", packRouter);
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
  console.log("website served on http://localhost:" + port);
});
