// Import the Express.js and bodyParser modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of the Express app
const app = express();

// Set the desired port for your backend localy
const localPORT = 3000;

// Initialize the weather data object with default values for temperature and humidity
var weatherData = {
    temperature: 0,
    humidity: 0,
    // Add more data as needed
};

// Use the bodyParser middleware to parse incoming JSON data from requests
app.use(bodyParser.json());

// Endpoint to receive data from Raspberry Pi
app.post("/weather", (req, res) => {
    // Store the received data in memory or database for later retrieval
    weatherData = req.body;
    // You can update your Raspberry Pi's weather sensors accordingly

    // Send a success status code of 200 back to the Raspberry Pi
    res.sendStatus(200);
});

// Endpoint to send data to Flutter frontend
app.get("/weather", (req, res) => {
    // Retrieve data from memory or database that was previously stored
    // And sending the JSON response with weather data to the Flutter frontend
    res.json(weatherData);
});

// Start the server and listen for incoming requests on the specified port
app.listen(process.env.PORT || localPORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
