# Travel API BACKEND

**Overview:** Develop a scalable API server using Node.js, Express.js, and PostgreSQL database.



### **1. To retrieve and store flight details in database**

- **Endpoint**: **`/api/v1/flight/:location`**
- **Method:** `GET`
- **Location:** Country name
- **Sample API:** `/api/v1/flight/Canada`
- **Sample Response**:
    
    ```json
    {
        "statusCode": 200,
        "message": "Flight details saved successfully.",
        "data": [
            {
                "_id": 1,
                "airport_id": "ISB.AIRPORT",
                "country_name": "Canada",
                "country_code": "CA",
                "flight_name": "Cathay Pacific Airways",
                "arrival_airport": "Toronto Pearson International Airport",
                "departure_airport": "Hazrat Shahjalal International Airport",
                "arrival_time": "2026-01-13T23:10:00",
                "departure_time": "2026-01-14T12:15:00",
                "flight_logo": "https://r-xx.bstatic.com/data/airlines_logo/CX.png",
                "fare": 1112
            },
            ....
        ]
    }
    ```
    

### **2. To retrieve and store attraction details in database**

- **Endpoint**: **`/api/v1/attraction/:location`**
- **Method:** `GET`
- **Location:** Country name
- **Sample API:** `/api/v1/attraction/Canada`;
- **Sample Response**:
    
    ```json
    {
        "statusCode": 200,
        "message": "Attraction details saved successfully.",
        "data": [
            {
                "_id": 8,
                "attraction_name": "Zipline To The Falls in Niagara Falls, Canada",
                "attraction_slug": "pr9hb0ykzkcq-zipline-to-the-falls-in-niagara-falls-canada",
                "additional_info": "Wheelchair accessible\n\nPublic transportation options are available nearby\n\nTransportation options are wheelchair accessible\n\nAll areas and surfaces are wheelchair accessible\n\nNot recommended for travelers with spinal injuries\n\nNot recommended for pregnant travelers\n\nNot recommended for travelers with poor cardiovascular health\n\nSuitable for all physical fitness levels\n\nChildren must be accompanied by an adult.\n\nMinimum age is 7 years.\n\nMaximum passenger weight 275lbs.\n\nAll Guests Must Complete A Waiver\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book. Children must be accompanied by an adult.",
                "has_free_cancellation": true,
                "attraction_image": "https://r-xx.bstatic.com/xdata/images/xphoto/900x600/369789485.jpg?k=9757f9ffcaa8881faf122ac7cd6477927644a67f87dc8b2854c7f6b878737ddc&o=",
                "attraction_price": 62,
                "whats_includes": "Falls viewing and photo opportunity at Falls Landing and Observation Deck./Safety helmet and comfort harness with pouch for personal effects./Return to the top via open air shuttle/All necessary instructions safety and enjoyment./",
                "city_name": "Niagara Falls",
                "country_code": "ca"
            },
            ...
        ]
    }
    ```
    

---
Above two api end point only for call rapid API and store data in database.
- Assumed Dhaka Airport id is fromId and flight departDate is always tomorrow for Search Flights API call

#### Flight Data available in flightDetails table
- India
- El Salvador
- Canada

#### Attraction Data available in attractionDetails table
- India
- El Salvador
- Canada
- Pakistan
- England
- US

---


### **1. To search flight location**

- **Endpoint**: **`/api/v1/search/:location`**
- **Method:** `GET`
- **Location:** Country name
- **Sample API:** `/api/v1/search/Canada`
- **Sample Response**:
    
    ```json
    {
        "statusCode": 200,
        "message": "Fetched successfully.",
        "data": {
            "geoInfo": {
                "location": "canada"
            },
            "flightInfo": [
                {
                    "_id": 5,
                    "airport_id": "YYZ.AIRPORT",
                    "country_name": "Canada",
                    "country_code": "CA",
                    "flight_name": "Cathay Pacific Airways",
                    "arrival_airport": "Toronto Pearson International Airport",
                    "departure_airport": "Hazrat Shahjalal International Airport",
                    "arrival_time": "2026-01-13T23:10:00",
                    "departure_time": "2026-01-14T12:15:00",
                    "flight_logo": "https://r-xx.bstatic.com/data/airlines_logo/CX.png",
                    "fare": 1112
                },
                ...
            ],
            "attractionInfo": [
                {
                    "_id": 8,
                    "attraction_name": "Zipline To The Falls in Niagara Falls, Canada",
                    "attraction_slug": "pr9hb0ykzkcq-zipline-to-the-falls-in-niagara-falls-canada",
                    "additional_info": "Wheelchair accessible\n\nPublic transportation options are available nearby\n\nTransportation options are wheelchair accessible\n\nAll areas and surfaces are wheelchair accessible\n\nNot recommended for travelers with spinal injuries\n\nNot recommended for pregnant travelers\n\nNot recommended for travelers with poor cardiovascular health\n\nSuitable for all physical fitness levels\n\nChildren must be accompanied by an adult.\n\nMinimum age is 7 years.\n\nMaximum passenger weight 275lbs.\n\nAll Guests Must Complete A Waiver\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book. Children must be accompanied by an adult.",
                    "has_free_cancellation": true,
                    "attraction_image": "https://r-xx.bstatic.com/xdata/images/xphoto/900x600/369789485.jpg?k=9757f9ffcaa8881faf122ac7cd6477927644a67f87dc8b2854c7f6b878737ddc&o=",
                    "attraction_price": 62,
                    "whats_includes": "Falls viewing and photo opportunity at Falls Landing and Observation Deck./Safety helmet and comfort harness with pouch for personal effects./Return to the top via open air shuttle/All necessary instructions safety and enjoyment./",
                    "city_name": "Niagara Falls",
                    "country_code": "ca"
                },
                ...
            ]
        }
    }
    ```
    

### **2. To retrieve and store attraction details in database**

- **Endpoint**: **`/api/v1/details/:id?searchType=attraction/flight`**
- **Method:** `GET`
- **Location:** here id is database serial id (1, 2, 3, 4, 5)
- **Sample API:** `/api/v1/details/:1?searchType=attraction`;
- **Sample Response**:
    
    ```json
    {
        "statusCode": 200,
        "message": "Attraction details fetch successfully",
        "data": {
            "geoInfo": {
                "name": "New Delhi",
                "country_code": "in"
            },
            "attraction": {
                "attraction_name": "The Indian Dream Tour - Classic North India",
                "attraction_slug": "prjl7ehqb59u-the-indian-dream-tour-classic-north-india",
                "additional_info": "Specialized infant seats are available\n\nNot recommended for pregnant travelers\n\nSuitable for all physical fitness levels\n\n\n\nPickup can also be arranged from any other convenient location within New Delhi.\n\nNot wheelchair accessible\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book. Children must be accompanied by an adult.",
                "has_free_cancellation": true,
                "attraction_image": "https://r-xx.bstatic.com/xdata/images/xphoto/900x600/339755810.jpg?k=7ef64735e1ed827d7d64b7244791822607d9e9b16a31b6ef141846bd93c94706&o=",
                "attraction_price": 3559,
                "whats_includes": [
                    "Local assistance throughout the tour",
                    "Two bottles of water per person per day",
                    "Local English-speaking guides for sightseeing",
                    "All taxes, parking, tolls, and driver expenses",
                    "Transfers and sightseeing by air-conditioned vehicle, as per the itinerary",
                    "Accommodation on a twin-sharing basis with breakfast, as per the itinerary",
                    "Breakfast"
                ]
            }
        }
    }
    ```

- **Sample API:** `/api/v1/details/:1?searchType=flight`;
- **Sample Response**:
    
    ```json
    {
        "statusCode": 200,
        "message": "Flight details fetch successfully",
        "data": {
            "geoInfo": {
                "country_name": "India",
                "country_code": "IN"
            },
            "flight": {
                "airport_id": "DEL.AIRPORT",
                "flight_name": "IndiGo",
                "arrival_airport": "Delhi International Airport",
                "departure_airport": "Hazrat Shahjalal International Airport",
                "arrival_time": "2026-01-13T20:10:00",
                "departure_time": "2026-01-14T05:25:00",
                "flight_logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
                "fare": 380
            }
        }
    }
    ```


## Getting Started
Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Jakaria030/travel-server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd travel-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add .env file:
   ```bash
    PORT=3000
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=travel-db
    DB_USER=<your-database-username>
    DB_PASSWORD=<your-database-password>
    RAPID_API_KEY=<your-api-key>
    RAPID_API_HOST=booking-com15.p.rapidapi.com
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```