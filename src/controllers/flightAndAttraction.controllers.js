import { getFlightAndAttractionDetailsFromDB, getFlightOrAttractionDetailsFromDB } from "../services/flightAndAttraction.services.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { whatsIncludesStringToArray } from "../utils/utils.js";

export const getFlightOrAttractionDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { searchType } = req.query;

    const details = await getFlightOrAttractionDetailsFromDB(id, searchType);

    if (!details) {
        res.status(404).json(new ApiResponse(404, "Details not found", null));
    }

    if (searchType.toLowerCase() === "attraction") {
        const { _id, city_name, country_code, whats_includes, ...rest } = details;
        const attractionInfo = {
            geoInfo: {
                name: city_name,
                country_code
            },
            attraction: { ...rest, whats_includes: whatsIncludesStringToArray(whats_includes) },
        };

        res.status(200).json(new ApiResponse(200, "Attraction details fetch successfully", attractionInfo));

    }

    if (searchType.toLowerCase() === "flight") {
        const { _id, country_name, country_code, ...rest } = details;
        const flightInfo = {
            geoInfo: {
                country_name,
                country_code
            },
            flight: {
                ...rest
            }
        }
        res.status(200).json(new ApiResponse(200, "Flight details fetch successfully", flightInfo));
    }

});

export const getFlightAndAttractionDetails = asyncHandler(async (req, res) => {
    const { location } = req.params;
    const result = await getFlightAndAttractionDetailsFromDB(location);

    if (!result) {
        return res.status(404).json(new ApiResponse(404, "Data not found!", null));
    }

    const responseData = {
        geoInfo: { location },
        ...result
    }

    res.status(200).json(new ApiResponse(200, "Fetched successfully.", responseData));
});