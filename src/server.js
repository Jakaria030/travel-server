import app from "./app.js";
import createTables from "./models/createTables.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
app.listen(port, async () => {
    await createTables();
    console.log(`Travel Server is running on port: ${port}`);
})
