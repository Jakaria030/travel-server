import pool from "../config/db.js";

const createTables = async () => {
    try {
        const attractionDetailsQuery = `CREATE TABLE IF NOT EXISTS attractionDetails (
            _id SERIAL PRIMARY KEY,
            attraction_name VARCHAR(255),
            attraction_slug VARCHAR(255),
            additional_info TEXT,
            has_free_cancellation BOOLEAN,
            attraction_image VARCHAR(255),
            attraction_price INT,
            whats_includes TEXT,
            city_name VARCHAR(150),
            country_code VARCHAR(20)
        );`;

        const flightDetailsQuery = `CREATE TABLE IF NOT EXISTS flightDetails (
            _id SERIAL PRIMARY KEY,
            airport_id VARCHAR(100),
            country_name VARCHAR(150),
            country_code VARCHAR(20),
            flight_name VARCHAR(150),
            arrival_airport VARCHAR(150),
            departure_airport VARCHAR(150),
            arrival_time VARCHAR(150),
            departure_time VARCHAR(150),
            flight_logo VARCHAR(150),
            fare INT
        );`;

        await pool.query(attractionDetailsQuery);
        await pool.query(flightDetailsQuery);

        console.log("Tables created!");
    } catch (err) {
        console.log(err);
    }
};

export default createTables;