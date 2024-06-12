import { Router } from "express";
import {
  getAllTalks,
  getTalk,
  likeTalk,
} from "../controllers/timelineController";

const router = Router();

router.get("/", getAllTalks);
router.get("/:id", getTalk);
router.post("/:id/like", likeTalk);

export default router;
