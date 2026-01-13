import express from "express";
import { retrievedAndStoreFlightDetails } from "../controllers/flight.controllers.js";


const router = express.Router();

router.get("/:location", retrievedAndStoreFlightDetails);

export default router;