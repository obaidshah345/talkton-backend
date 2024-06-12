import express from "express";
import http from "http";
import cors from "cors";
import { config } from "./config";
import talkRoutes from "./routes/timelineRoutes";

const app = express();
const server = http.createServer(app);

const PORT = config.port;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/timeline", talkRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
