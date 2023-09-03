const express = require("express");
const dotenv = require("dotenv").config();
const router  = require("./routes/contactRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const app = express();

connectDb();

const port = process.env.PORT || 5000;
//For parsing body
app.use(express.json());
app.use('/api/contacts',router)
app.use(errorHandler);

app.listen(port, () => {
    console.log("Server is running on port " + port);
})