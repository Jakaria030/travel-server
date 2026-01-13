import pool from "../config/db.js";

export const getFlightOrAttractionDetailsFromDB = async (id, searchType) => {
    let selectQuery;

    if (searchType.toLowerCase() === "attraction") {
        selectQuery = `SELECT * FROM attractionDetails WHERE _id = $1;`;
    } else if (searchType.toLowerCase() === "flight") {
        selectQuery = `SELECT * FROM flightDetails WHERE _id = $1;`;
    } else {
        return;
    }

    const result = await pool.query(selectQuery, [id]);
    return result.rows[0];
};

export const getFlightAndAttractionDetailsFromDB = async (location) => {
    // get flight info by using location
    const flightSearchQuery = `SELECT * FROM flightDetails WHERE LOWER(country_name) = $1;`;
    const flightResponse = await pool.query(flightSearchQuery, [location.toLowerCase()]);

    const flightInfo = flightResponse.rows;

    if (flightInfo.length === 0) return;

    const attractionSearchQuery = `SELECT * FROM attractionDetails WHERE LOWER(country_code) = $1;`;
    const attractionResponse = await pool.query(attractionSearchQuery, [(flightInfo[0]?.country_code)?.toLowerCase()]);

    const attractionInfo = attractionResponse.rows;

    return { flightInfo, attractionInfo };
};
