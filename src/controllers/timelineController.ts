import { Request, Response } from "express";
import { readFileSync, writeFileSync } from "fs";
import PusherServer from "pusher";
import path from "path";
import { config } from "../config";
import { Talk } from "../types";

// Initialize Pusher
export const pusher = new PusherServer({
  appId: config.pusherAppId!,
  key: config.pusherKey!,
  secret: config.pusherSecret!,
  cluster: config.pusherCluster!,
  useTLS: true,
});

const talksFilePath = path.join(__dirname, "../data/fakeData.json");

// Load talks from file
const loadTalks = () => {
  const data = readFileSync(talksFilePath, "utf-8");
  return JSON.parse(data);
};

// Save talks to file
const saveTalks = (talks: Talk) => {
  writeFileSync(talksFilePath, JSON.stringify(talks, null, 2));
};

// Get all talks
export const getAllTalks = (req: Request, res: Response) => {
  const talks: Talk[] = loadTalks();
  res.json(talks);
};

// Get a talk
export const getTalk = (req: Request, res: Response) => {
  const talks = loadTalks();
  const talk = talks.find((t: Talk) => t.id === req.params.id);
  if (talk) {
    res.json(talk);
  } else {
    res.status(404).json({ error: "Talk not found" });
  }
};

// Like a talk
export const likeTalk = (req: Request, res: Response) => {
  const talks = loadTalks();
  const talk = talks.find((t: Talk) => t.id === req.params.id);

  if (talk) {
    talk.likesCount += 1;
    saveTalks(talks);
    pusher.trigger("talks", "like", {
      id: talk.id,
      likesCount: talk.likesCount,
    });
    console.log("LIke Added!!!", talk);
    res.json(talk);
  } else {
    res.status(404).json({ error: "Talk not found" });
  }
};
