const express = require("express");
const app = express();



// Database connection
require("./db");

// Middleware
app.use(express.json());

const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});