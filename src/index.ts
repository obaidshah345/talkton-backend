import express from "express";
import http from "http";
import cors from "cors";
import talkRoutes from "./routes/timelineRoutes";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/timeline", talkRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
