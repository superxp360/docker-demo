// Import the express module and the cors module
import express from "express";
import cors from 'cors';

// Set the port number to use for the server, default to 3000 if not provided
const PORT = process.env.PORT || 3000;

// Create an instance of the express application
const app = express();

// Enable CORS middleware to allow cross-origin requests
app.use(cors())

// Define a route for the root path of the server
app.get("/", (req, res) => {
    // Send a simple message as the response
    res.send("Our API is working! on Docker! 🐳")
});

// Start the server to listen on the specified port
app.listen(PORT, () => {
    // Log a message to indicate that the server is running
    console.log(`Listening on http://localhost${PORT}...`)
})