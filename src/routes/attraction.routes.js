import express from "express";
import { retrievedAndStoreAttractionLocations } from "../controllers/attraction.controllers.js";

const router = express.Router();


router.get("/:location", retrievedAndStoreAttractionLocations);

export default router;