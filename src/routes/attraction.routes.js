import express from "express";
import { retrievedAndStoreAttractionDetails } from "../controllers/attraction.controllers.js";

const router = express.Router();

router.get("/:location", retrievedAndStoreAttractionDetails);

export default router;