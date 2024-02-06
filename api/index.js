import express from "express";
import authRoutes from "./routes/auth.js";
import collaboratorRoutes from "./routes/collaborators.js";
import projectRoutes from "./routes/projects.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to match your client's origin
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/collaborators", collaboratorRoutes);
app.use("/api/projects", projectRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
