import pool from "../config/db.js";
import { rapidApiBaseURL, rapidApiOptions } from "../config/rapidApi.js";
import { departDate } from "../utils/utils.js";


// flight search flight token
export const getFlightToken = async (fromId, toId, departDate) => {
    const url = `${rapidApiBaseURL}/flights/searchFlights?fromId=${fromId}&toId=${toId}&departDate=${departDate}`;
    const response = await fetch(url, rapidApiOptions);
    const result = await response.json();

    // there are multiple flightOffers and token. So, take only one token for simplicity.
    return result?.data?.flightOffers[0]?.token;
};

// get flight details using token
export const getFlightDetails = async (token) => {
    const url = `${rapidApiBaseURL}/flights/getFlightDetails?token=${token}`;
    const response = await fetch(url, rapidApiOptions);
    const result = await response.json();

    return result?.data;
};

// save flight details
export const insertFlightDetails = async (flightDetails) => {
    if (!flightDetails?.length) return [];

    const values = [];
    const placeholders = flightDetails.map((item, index) => {
        const base = index * 10;

        values.push(
            item.airport_id,
            item.country_name,
            item.country_code,
            item.flight_name,
            item.arrival_airport,
            item.departure_airport,
            item.arrival_time,
            item.departure_time,
            item.flight_logo,
            item.fare
        );

        return `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5}, $${base + 6}, $${base + 7}, $${base + 8}, $${base + 9}, $${base + 10})`;
    });

    const query = `
    INSERT INTO flightDetails
    (
      airport_id,
      country_name,
      country_code,
      flight_name,
      arrival_airport,
      departure_airport,
      arrival_time,
      departure_time,
      flight_logo,
      fare
    ) VALUES ${placeholders.join(",")} RETURNING *`;

    const result = await pool.query(query, values);

    return result.rows;
};

// flight details retrieved and store in database
export const retrievedAndStoreFlightDetailsFromRapidApi = async (location) => {
    // 1 -> Search flight location and get flight id, country, country code
    const flightLocationFetchURL = `${rapidApiBaseURL}/flights/searchDestination?query=${location}`;
    const response = await fetch(flightLocationFetchURL, rapidApiOptions);
    const data = await response.json();

    const airports = data?.data;

    // max airport count assign 2 for reduce api call
    const maxAirportCount = 2;
    const airportList = [];

    for (let indx = 0; indx < Math.min(airports?.length, maxAirportCount); indx++) {
        if (indx === maxAirportCount) break;

        airportList.push({
            airport_id: airports[indx].id,
            country_name: airports[indx].countryName,
            country_code: airports[indx].country
        });
    }

    // 2 -> Search flight and get tokens, assume that Dhaka airport id is the from id and flight date is today's date+1;
    const flightDetails = [];
    for (let indx = 0; indx < airportList?.length; indx++) {
        const token = await getFlightToken("DAC.AIRPORT", airportList[indx].airport_id, departDate());

        // 3 -> search flight details using token
        const details = await getFlightDetails(token);

        if (!details) continue;

        flightDetails.push({
            ...airportList[indx],
            flight_name: details?.segments[0]?.legs[0]?.carriersData[0]?.name,
            arrival_airport: details?.segments[0]?.arrivalAirport?.name,
            departure_airport: details?.segments[0]?.departureAirport?.name,
            arrival_time: details?.segments[0]?.departureTime,
            departure_time: details?.segments[0]?.arrivalTime,
            flight_logo: details?.segments[0]?.legs[0]?.carriersData[0]?.logo,
            fare: Math.floor(details?.priceBreakdown?.total?.units)
        });
    }
    // save flight details in database
    const result = await insertFlightDetails(flightDetails);

    return result;
};