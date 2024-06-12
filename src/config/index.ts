import dotenv from "dotenv";

dotenv.config();

export const config = {
  pusherAppId: process.env.PUSHER_APP_ID,
  pusherKey: process.env.PUSHER_KEY,
  pusherSecret: process.env.PUSHER_SECRET,
  pusherCluster: process.env.PUSHER_CLUSTER,
  port: process.env.PORT || 3000,
};
