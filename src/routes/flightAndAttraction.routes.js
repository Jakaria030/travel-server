import express from "express";
import { getFlightAndAttractionDetails, getFlightOrAttractionDetails } from "../controllers/flightAndAttraction.controllers.js";

const router = express.Router();


router.get("/details/:id", getFlightOrAttractionDetails);
router.get("/search/:location", getFlightAndAttractionDetails);

export default router;