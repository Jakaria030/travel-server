import { retrievedAndStoreFlightDetailsFromRapidApi } from "../services/flight.services.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const retrievedAndStoreFlightDetails = asyncHandler(async (req, res) => {
    const { location } = req.params;

    const details = await retrievedAndStoreFlightDetailsFromRapidApi(location);

    if (!details) {
        res.status(404).json(new ApiResponse(404, "Flight details not found", null));
    }

    res.status(200).json(new ApiResponse(200, "Flight details saved successfully", details));
});