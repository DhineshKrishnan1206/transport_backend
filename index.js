    const express = require('express');
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');
    const cors = require('cors'); // Import cors
    const formRoutes = require('./routes/forms');
    const http = require('http');
    const app = express();


    const portHTTP = 3001; 
    // Use CORS middleware
    app.use(cors()); // Enable CORS for all routes

    app.use(bodyParser.json());

    function connectDB() {
        try {
            mongoose.connect("mongodb+srv://dhinesh:dhinesh@transport.qitv3.mongodb.net/?retryWrites=true&w=majority&appName=transport", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("Connected to DB Successfully");
        } catch (error) {
            console.log("Error while connecting to database", error);
        }
    }

    connectDB();

    app.use('/api/form', formRoutes);

    // Start Server
    // Create HTTP server
const httpServer = http.createServer(app);

// Create HTTPS server

// Listen on both HTTP and HTTPS ports
httpServer.listen(portHTTP, () => {
    console.log(`Running on port ${portHTTP} (HTTP)`);
});


app.get('/', (req, res) => {
    res.send('<h1>Welcome to Server!</h1>');
});

const dummyRequestInterval = 14 * 60 * 1000; // 14 minutes in milliseconds
setInterval(() => {
    
    http.get(`http://localhost:${portHTTP}`, (res) => {
        console.log(`Dummy request sent at ${new Date()}`);
    }).on('error', (err) => {
        console.error(`Error sending dummy request: ${err.message}`);
    });
}, dummyRequestInterval);