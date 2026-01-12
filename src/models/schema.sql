
-- attraction location table create
CREATE TABLE IF NOT EXISTS attractionLocations (
    _id SERIAL PRIMARY KEY,
    attraction_slug VARCHAR(255),
    city_name VARCHAR(150),
    country_code VARCHAR(20)
);

-- attractions details table create
CREATE TABLE IF NOT EXISTS atrractionDetails (
    _id SERIAL PRIMARY KEY,
    attraction_name VARCHAR(255),
    attraction_slug VARCHAR(255),
    additionalInfo VARCHAR(500),
    has_free_cancellation BOOLEAN,
    attraction_image VARCHAR(255),
    attraction_price INT,
    whatsIncludes VARCHAR(500),
    city_name VARCHAR(150),
    country_code VARCHAR(20)
);