import pool from "../config/db.js";
import { rapidApiBaseURL, rapidApiOptions } from "../config/rapidApi.js";


export const fetchAttractionDetails = async (slug) => {
    const url = `${rapidApiBaseURL}/attraction/getAttractionDetails?slug=${slug}`;

}

export const insertAttractionDetails = async (attractionDetails) => {
    if (!attractionDetails.length) return [];

    const values = [];
    const placeholders = attractionDetails.map((item, index) => {
        const base = index * 9;

        values.push(
            item.attraction_name,
            item.attraction_slug,
            item.additionalInfo,
            item.has_free_cancellation,
            item.attraction_image,
            item.attraction_price,
            item.whats_includes,
            item.city_name,
            item.country_code
        );

        return `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7}, $${base + 8}, $${base + 9})`;
    });

    const query = `
    INSERT INTO attractionDetails
    (
      attraction_name,
      attraction_slug,
      additional_info,
      has_free_cancellation,
      attraction_image,
      attraction_price,
      whats_includes,
      city_name,
      country_code
    )
    VALUES ${placeholders.join(",")}
    RETURNING *
  `;

    const result = await pool.query(query, values);

    return result.rows;   // ✅ inserted rows
};


export const retrievedAndStoreAttractionLocationsFromRapidApi = async (location) => {
    const slugFetchURL = `${rapidApiBaseURL}/attraction/searchLocation?query=${location}`;

    const response = await fetch(slugFetchURL, rapidApiOptions);
    const data = await response.json();


    const maxSlugCount = 2;
    const attractionLocations = data.data?.products?.map((product, indx) => {
        if (indx === maxSlugCount)
            return {
                attraction_slug: product.productSlug,
                city_name: product.cityName,
                country_code: product.countryCode,
            };
    });






    return attractionLocations;
};