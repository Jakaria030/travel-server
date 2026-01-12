import pool from "../config/db.js";
import { rapidApiBaseURL, rapidApiOptions } from "../config/rapidApi.js";

export const retrievedAndStoreAttractionLocationsFromRapidApi = async (location) => {
    const url = `${rapidApiBaseURL}/attraction/searchLocation?query=${location}`;

    const response = await fetch(url, rapidApiOptions);
    const data = await response.json();

    const attractionLocations = data?.products?.map((product) => {
        return {
            attraction_slug: product.productSlug,
            city_name: product.cityName,
            country_code: product.countryCode,
        };
    });

    
    return attractionLocations;
};