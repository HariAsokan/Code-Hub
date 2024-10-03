import express from 'express';
import mongoose from 'mongoose';  // Only necessary if you plan to use MongoDB
import cors from 'cors';  // Only necessary if you're dealing with cross-origin requests
import bodyParser from 'body-parser';  // Correct import for body-parser

const app = express();
const port = 3000;

// Middleware
app.use(cors());  // Enable cross-origin requests if necessary
app.use(bodyParser.json());  // Parse incoming request bodies in JSON format

// Simple GET route (END POINT)
app.get('/api', (req, res) => {
    res.send('Request received successfully');
});
app.post('/create', (req, res) => {
    console.log(req.body)
    res.send('Request received successfully');
});
// Start the server (PORT IS A SEGREGATION OF SPECIFIC SERVER )
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


