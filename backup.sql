--
-- PostgreSQL database dump
--

\restrict AryKh2RD5nppKq4jvBrjtFGY32YwPPm3CuR2NYYVK4Xp2ECQjJw59iyP4Xn2cQE

-- Dumped from database version 18.1 (Debian 18.1-1.pgdg13+2)
-- Dumped by pg_dump version 18.1 (Debian 18.1-1.pgdg13+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: attractiondetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.attractiondetails (
    _id integer NOT NULL,
    attraction_name character varying(255),
    attraction_slug character varying(255),
    additional_info text,
    has_free_cancellation boolean,
    attraction_image character varying(255),
    attraction_price integer,
    whats_includes text,
    city_name character varying(150),
    country_code character varying(20)
);


ALTER TABLE public.attractiondetails OWNER TO postgres;

--
-- Name: attractiondetails__id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.attractiondetails__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.attractiondetails__id_seq OWNER TO postgres;

--
-- Name: attractiondetails__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.attractiondetails__id_seq OWNED BY public.attractiondetails._id;


--
-- Name: flightdetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.flightdetails (
    _id integer NOT NULL,
    airport_id character varying(100),
    country_name character varying(150),
    country_code character varying(20),
    flight_name character varying(150),
    arrival_airport character varying(150),
    departure_airport character varying(150),
    arrival_time character varying(150),
    departure_time character varying(150),
    flight_logo character varying(150),
    fare integer
);


ALTER TABLE public.flightdetails OWNER TO postgres;

--
-- Name: flightdetails__id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.flightdetails__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.flightdetails__id_seq OWNER TO postgres;

--
-- Name: flightdetails__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.flightdetails__id_seq OWNED BY public.flightdetails._id;


--
-- Name: attractiondetails _id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attractiondetails ALTER COLUMN _id SET DEFAULT nextval('public.attractiondetails__id_seq'::regclass);


--
-- Name: flightdetails _id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flightdetails ALTER COLUMN _id SET DEFAULT nextval('public.flightdetails__id_seq'::regclass);


--
-- Data for Name: attractiondetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.attractiondetails (_id, attraction_name, attraction_slug, additional_info, has_free_cancellation, attraction_image, attraction_price, whats_includes, city_name, country_code) FROM stdin;
1	The Indian Dream Tour - Classic North India	prjl7ehqb59u-the-indian-dream-tour-classic-north-india	Specialized infant seats are available\n\nNot recommended for pregnant travelers\n\nSuitable for all physical fitness levels\n\n\n\nPickup can also be arranged from any other convenient location within New Delhi.\n\nNot wheelchair accessible\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book. Children must be accompanied by an adult.	t	https://r-xx.bstatic.com/xdata/images/xphoto/900x600/339755810.jpg?k=7ef64735e1ed827d7d64b7244791822607d9e9b16a31b6ef141846bd93c94706&o=	3559	Local assistance throughout the tour/Two bottles of water per person per day/Local English-speaking guides for sightseeing/All taxes, parking, tolls, and driver expenses/Transfers and sightseeing by air-conditioned vehicle, as per the itinerary/Accommodation on a twin-sharing basis with breakfast, as per the itinerary/Breakfast/	New Delhi	in
2	Festivals of India.	prgsdpkhngl0-festivals-of-india	Wheelchair accessible\n\nInfants and small children can ride in a pram or stroller\n\nPublic transportation options are available nearby\n\nTransportation options are wheelchair accessible\n\nAll areas and surfaces are wheelchair accessible\n\nTravelers should have at least a moderate level of physical fitness\n\n\n\nWe pickup from all hotels in Mumbai or any accommodation.\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book. Children must be accompanied by an adult.	t	https://r-xx.bstatic.com/xdata/images/xphoto/900x600/303659320.jpg?k=e1e59ef18fe7991d377127fbe6db87b969c9802642127efda371c786f8f3282d&o=	52	Uber pick up & Drop/	Mumbai	in
3	Heroes of England tour	pra4auzolyu8-heroes-of-england-tour	Infants and small children can ride in a pram or stroller\n\nPublic transportation options are available nearby\n\nNot recommended for travelers with spinal injuries\n\nNot recommended for travelers with poor cardiovascular health\n\nTravelers should have at least a moderate level of physical fitness\n\nNot wheelchair accessible\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book. Children must be accompanied by an adult.	f	https://q-xx.bstatic.com/xdata/images/xphoto/900x600/433316149.jpg?k=cff8e17396bbb4b5e8fed5cd94091324474f18b074a77d1aa3ff6cb0524d1104&o=	1167	Private transportation/Lunch/Dinner/Breakfast/Tour guide is included/	Birmingham	gb
4	Freestyle Football Workshop in England	prazpy90dy9t-freestyle-football-workshop-in-england	Wheelchair accessible\n\nInfants and small children can ride in a pram or stroller\n\nService animals allowed\n\nPublic transportation options are available nearby\n\nInfants are required to sit on an adult’s lap\n\nTransportation options are wheelchair accessible\n\nAll areas and surfaces are wheelchair accessible\n\nSuitable for all physical fitness levels\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book.	f	https://q-xx.bstatic.com/xdata/images/xphoto/900x600/150907028.jpg?k=87d06aa08b749a2944dd4b2a6938eeee0f9e8120713608e0f7d918f35403fdd4&o=	1731	Taught by Professional Football Freestylers/	London	gb
5	Usulután to El Salvador Airport (SAL) Departure Private Transfer	prfx0mli7ifi-usulutan-to-el-salvador-airport-sal-departure-private-transfer	Specialized infant seats are available\n\nService animals allowed\n\nPublic transportation options are available nearby\n\nInfants and small children can ride in a pram or stroller\n\nSuitable for all physical fitness levels\n\nNOTE: Please provide us information about your pick up (e.g. time) and the number of luggage you have.\n\nDEPARTURE TRANSFER. Choose a time of pick up from your accommodation (transfers operate 24 hours a day, 7 days a week). Please advise your preferred pickup time in the Special Requirements field on booking. We recommend that you request your pick up at least two hours in advance of your flight departure time.\n\nIMPORTANT NOTE: Please advise the number of luggage you have.\n\n\n\nNot wheelchair accessible\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book.	t	https://r-xx.bstatic.com/xdata/images/xphoto/900x600/252395980.jpg?k=2e326b772ea43c50d35a49a7c696859933b4f08da2c85a891259c8bb59fd702a&o=	308	Private transportation/All Fees and Taxes/Air-conditioned vehicle/	Nanastepeque	sv
6	El Salvador Airport (SAL) to Usulután Round-Trip Private Transfer	prukzrtp2z2a-el-salvador-airport-sal-to-usulutan-round-trip-private-transfer	Specialized infant seats are available\n\nService animals allowed\n\nPublic transportation options are available nearby\n\nInfants and small children can ride in a pram or stroller\n\nSuitable for all physical fitness levels\n\nNOTE: Please provide us information about your pick up (e.g. time) and the number of luggage you have.\n\nARRIVAL TRANSFER. After you have collected your luggages, head through customs and out in the arrival hall. Your driver will be waiting in the arrival hall by the DRIVER MEETING POINT/LIMO SERVICE holding a signboard with lead traveller name on it.\nIMPORTANT NOTE: Please advise the number of luggage you have.\n\nDEPARTURE TRANSFER. Choose a time of pick up from your accommodation (transfers operate 24 hours a day, 7 days a week). Please advise your preferred pickup time in the Special Requirements field on booking. We recommend that you request your pick up at least two hours in advance of your flight departure time.\nIMPORTANT NOTE: Please advise the number of luggage you have.\n\n\n\nNot wheelchair accessible\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book.	t	https://q-xx.bstatic.com/xdata/images/xphoto/900x600/252395984.jpg?k=f68fbcd6c9a09a6ae70a303b9bbea81c9559a8b94ff0ea94104dd7ffa833930e&o=	616	Private transportation/All Fees and Taxes/Air-conditioned vehicle/	San Salvador	sv
7	Private Transfer from Banyuwangi Airport (BWX) to Pakis	pr5v0ojuo53i-private-transfer-from-banyuwangi-airport-bwx-to-pakis	Specialized infant seats are available\n\nInfants and small children can ride in a pram or stroller\n\nSuitable for all physical fitness levels\n\nPrice is per person.\n\nThe driver will wait for 60 minutes after efective landing time, please contact our assistance center if you can't find the driver on arrival.\n\nInfants (up to 2 years old) and children (up to 6 years old) must be seated in a baby or child seat. Please ensure you select the number of infants or children travelling so that the seat can be provided at the time\n\nThe duration of transfers are approximate, the exact duration will depend on the time of day and traffic conditions\n\nNot wheelchair accessible\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book.	t	https://q-xx.bstatic.com/xdata/images/xphoto/900x600/319620511.jpg?k=9e78c3c634bdbb6e695c197d803e132b66afcdba60d620cd8fa99e66b43900b8&o=	94	All taxes and VAT/Meet and greet service/Any parking and/or airport tolls/Private one way transfer/Tips and gratuities/	Banyuwangi	id
8	Zipline To The Falls in Niagara Falls, Canada	pr9hb0ykzkcq-zipline-to-the-falls-in-niagara-falls-canada	Wheelchair accessible\n\nPublic transportation options are available nearby\n\nTransportation options are wheelchair accessible\n\nAll areas and surfaces are wheelchair accessible\n\nNot recommended for travelers with spinal injuries\n\nNot recommended for pregnant travelers\n\nNot recommended for travelers with poor cardiovascular health\n\nSuitable for all physical fitness levels\n\nChildren must be accompanied by an adult.\n\nMinimum age is 7 years.\n\nMaximum passenger weight 275lbs.\n\nAll Guests Must Complete A Waiver\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book. Children must be accompanied by an adult.	t	https://r-xx.bstatic.com/xdata/images/xphoto/900x600/369789485.jpg?k=9757f9ffcaa8881faf122ac7cd6477927644a67f87dc8b2854c7f6b878737ddc&o=	62	Falls viewing and photo opportunity at Falls Landing and Observation Deck./Safety helmet and comfort harness with pouch for personal effects./Return to the top via open air shuttle/All necessary instructions safety and enjoyment./	Niagara Falls	ca
9	Guided Winter Wonderland Tour to Canada	prn3gijuapfa-guided-winter-wonderland-tour-to-canada	Infants are required to sit on an adult’s lap\n\nPublic transportation options are available nearby\n\nInfants and small children can ride in a pram or stroller\n\nSuitable for all physical fitness levels\n\nSpecific tour stops vary & will be modified based on road conditions, timing, and weather.\n\nAs this tour enters Canada all passengers must bring their passports\n\n\n\nTOUR PROVIDER: Skagway Tours\n\nCHECK-IN TIME: 15 minutes before your tour’s start time \n\nMEETING LOCATION: Bus loading area near your ship \n\nYour cruise ship will arrive at one of three locations in the Port of Skagway: the ORE Dock, BROADWAY Dock, or the RAILROAD Dock. 15 minutes before your tour, a Skagway Tours representative holding a red “Skagway Tours” sign will meet you at your dock’s bus loading area. \n\nIMPORTANT: Please do not use Google or Apple Maps, or the map link provided by Viator. These will send you to our office in town or the Harbor Master’s office. We pick you up at the bus loading area near your ship.\n\nPASSPORTS REQUIRED: This tour crosses the USA-Canada border twice. Passports are required. Guests without proper documentation will be denied participation with no refunds.\n\nFor USA or Canadian citizens a government-issued ID and original birth certificate (no photocopies) are also valid for entry.\n\nVISAS. If you come from a country that needs a visa for Canada or the USA you will need to bring those in addition to your passport.\n\nIMPORTANT: Cruise line staff may incorrectly say passports are not needed in Skagway, AK. You MUST bring your passport or valid ID/birth certificate due to the border crossing.\n\nNot wheelchair accessible\n\nPlease bring your ticket with you to the attraction.\n\nBe aware that operators may cancel for unforeseen reasons.\n\nYou need to be 18 years or older to book. Children must be accompanied by an adult.	t	https://q-xx.bstatic.com/xdata/images/xphoto/900x600/303329448.jpg?k=52ceae634610807f87962ff56dbce0daeae0eb31ac9a729fba618b90f25e3785&o=	120	Land tour via van or touring bus with multiple scenic stops/Stop and play in the snow *weather permitting/Tour guide and narration along the journey, including multiple photo stops/Pickup & drop off at cruise ship docks/Foliage/Fall or winter/spring tour thru Canada & Alaska *weather dependent/Photo stop in Tormented Valley, Fraser, or other parts of Canada/	Skagway	us
\.


--
-- Data for Name: flightdetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.flightdetails (_id, airport_id, country_name, country_code, flight_name, arrival_airport, departure_airport, arrival_time, departure_time, flight_logo, fare) FROM stdin;
1	DEL.AIRPORT	India	IN	IndiGo	Delhi International Airport	Hazrat Shahjalal International Airport	2026-01-13T20:10:00	2026-01-14T05:25:00	https://r-xx.bstatic.com/data/airlines_logo/6E.png	380
2	BOM.AIRPORT	India	IN	IndiGo	Chhatrapati Shivaji International Airport Mumbai	Hazrat Shahjalal International Airport	2026-01-13T20:10:00	2026-01-14T07:30:00	https://r-xx.bstatic.com/data/airlines_logo/6E.png	314
3	LHR.AIRPORT	United Kingdom	GB	Cathay Pacific Airways	London Heathrow Airport	Hazrat Shahjalal International Airport	2026-01-13T23:10:00	2026-01-14T20:10:00	https://r-xx.bstatic.com/data/airlines_logo/CX.png	865
4	SAL.AIRPORT	El Salvador	SV	Cathay Pacific Airways	El Salvador International Airport	Hazrat Shahjalal International Airport	2026-01-13T23:10:00	2026-01-14T19:50:00	https://r-xx.bstatic.com/data/airlines_logo/CX.png	4874
5	YYZ.AIRPORT	Canada	CA	Cathay Pacific Airways	Toronto Pearson International Airport	Hazrat Shahjalal International Airport	2026-01-13T23:10:00	2026-01-14T12:15:00	https://r-xx.bstatic.com/data/airlines_logo/CX.png	1112
\.


--
-- Name: attractiondetails__id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.attractiondetails__id_seq', 9, true);


--
-- Name: flightdetails__id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.flightdetails__id_seq', 5, true);


--
-- Name: attractiondetails attractiondetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.attractiondetails
    ADD CONSTRAINT attractiondetails_pkey PRIMARY KEY (_id);


--
-- Name: flightdetails flightdetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.flightdetails
    ADD CONSTRAINT flightdetails_pkey PRIMARY KEY (_id);


--
-- PostgreSQL database dump complete
--

\unrestrict AryKh2RD5nppKq4jvBrjtFGY32YwPPm3CuR2NYYVK4Xp2ECQjJw59iyP4Xn2cQE

