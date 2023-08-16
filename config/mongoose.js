// Importing the mongoose library
const mongoose = require('mongoose');

// Connecting to the MongoDB database using the provided connection string
mongoose.connect(`mongodb+srv://API:9ChUpQBupCz6AstE@cluster0.gdcw1lg.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

// Event listener for handling connection errors
db.on('error', console.error.bind(console, 'Error connecting to the db'));

// Event listener for handling successful connection
db.once('open', function () {
    console.log("Successfully connected to the Database");
});

module.exports = db;