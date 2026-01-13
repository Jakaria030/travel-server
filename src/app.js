import express from "express";
import cors from "cors";
import ApiResponse from "./utils/ApiResponse.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// application level middlewares
app.use(express.json());
app.use(cors());

// routes import
import attractionRoutes from "./routes/attraction.routes.js";
import flightRoutes from "./routes/flight.routes.js";
import flightAndAttractionRoutes from "./routes/flightAndAttraction.routes.js";

// routes middlewares
app.use("/api/v1/attraction", attractionRoutes);
app.use("/api/v1/flight", flightRoutes);
app.use("/api/v1", flightAndAttractionRoutes);


// root route welcome message
app.get("/", (_req, res) => {
    res.status(200).json(new ApiResponse(200, "Welcome to Travel Server.", null));
});

// not found route middleware
app.use((_req, res) => {
    res.status(404).json(new ApiResponse(404, "Route not Found!", null));
});

// error handler middleware
app.use(errorHandler);

export default app;