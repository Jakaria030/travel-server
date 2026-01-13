import pool from "../config/db.js";
import { rapidApiBaseURL, rapidApiOptions } from "../config/rapidApi.js";
import { formatWhatsIncluded } from "../utils/utils.js";

// fetch attraction details using slug
export const fetchAttractionDetails = async (slug) => {
    const url = `${rapidApiBaseURL}/attraction/getAttractionDetails?slug=${slug}`;
    const response = await fetch(url, rapidApiOptions);
    const result = await response.json();
    return result?.data;
}

// attraction details insert
export const insertAttractionDetails = async (attractionDetails) => {
    if (!attractionDetails.length) return [];

    const values = [];
    const placeholders = attractionDetails.map((item, index) => {
        const base = index * 9;

        values.push(
            item.attraction_name,
            item.attraction_slug,
            item.additional_info,
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
    ) VALUES ${placeholders.join(",")} RETURNING *`;

    const result = await pool.query(query, values);

    return result.rows;
};

// attraction details retrieved and store in database
export const retrievedAndStoreAttractionDetailsFromRapidApi = async (location) => {
    // fetch attraction slug list using location
    const slugFetchURL = `${rapidApiBaseURL}/attraction/searchLocation?query=${location}`;
    const response = await fetch(slugFetchURL, rapidApiOptions);
    const data = await response.json();
    const products = data?.data?.products;

    // max slug count assign 2 for reduce api call
    const maxSlugCount = 2;
    const attractionSlugList = [];

    for (let indx = 0; indx < Math.min(products.length, maxSlugCount); indx++) {
        if (indx === maxSlugCount) break;

        attractionSlugList.push({
            attraction_slug: products[indx].productSlug,
            city_name: products[indx].cityName,
            country_code: products[indx].countryCode
        });
    }


    // get attraction data and format according to attractionDetails table schema
    const attractionDetails = [];
    for (let indx = 0; indx < attractionSlugList.length; indx++) {
        const details = await fetchAttractionDetails(attractionSlugList[indx].attraction_slug);

        if (!details) continue;

        attractionDetails.push({
            attraction_name: details?.name,
            attraction_slug: details?.slug,
            additional_info: details?.additionalInfo,
            has_free_cancellation: details?.cancellationPolicy?.hasFreeCancellation,
            attraction_image: details?.photos[0].medium,
            attraction_price: Math.floor(details?.representativePrice?.chargeAmount),
            whats_includes: formatWhatsIncluded(details?.whatsIncluded),
            city_name: attractionSlugList[indx].city_name,
            country_code: attractionSlugList[indx].country_code
        });
    }


    // call insertAttractionDetails to insert into table;
    const result = await insertAttractionDetails(attractionDetails);

    return result;
};