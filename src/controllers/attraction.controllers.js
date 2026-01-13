import { retrievedAndStoreAttractionDetailsFromRapidApi } from "../services/attraction.services.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const retrievedAndStoreAttractionDetails = asyncHandler(async (req, res) => {
    const { location } = req.params;

    const details = await retrievedAndStoreAttractionDetailsFromRapidApi(location);

    if (!details) {
        return res.status(404).json(new ApiResponse(404, "Attraction details is not found!", null));
    }

    res.status(200).json(new ApiResponse(200, "Attraction details saved successfully.", details));
});