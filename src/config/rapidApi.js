import dotenv from "dotenv";

dotenv.config();

export const rapidApiBaseURL = "https://booking-com15.p.rapidapi.com/api/v1";

export const rapidApiOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY,
        'x-rapidapi-host': process.env.RAPID_API_HOST
    }
};