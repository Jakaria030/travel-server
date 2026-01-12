import pool from "../config/db.js";

const createTables = async () => {
    try {
        const attractionLocationsTableCreateQuery = `CREATE TABLE IF NOT EXISTS attractionLocations (
            _id SERIAL PRIMARY KEY,
            attraction_slug VARCHAR(255),
            city_name VARCHAR(150),
            country_code VARCHAR(20)
        );`;

        await pool.query(attractionLocationsTableCreateQuery);

        console.log("Tables created!");
    } catch (err) {
        console.log(err);
    }
};

export default createTables;