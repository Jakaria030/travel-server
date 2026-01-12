import { retrievedAndStoreAttractionLocationsFromRapidApi } from "../services/attraction.services.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const retrievedAndStoreAttractionLocations = asyncHandler(async (req, res) => {
    const { location } = req.params;

    const result = await retrievedAndStoreAttractionLocationsFromRapidApi(location);

    res.status(200).json(new ApiResponse(200, "Attraction Location fetch successfully.", result));
});