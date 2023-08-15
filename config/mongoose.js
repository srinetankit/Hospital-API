const mongoose = require('mongoose');

// mongoose.connect(`mongodb+srv://hospital-api:iknn0BdV4Uu8YlfC@skilltag.cqrlh79.mongodb.net/?retryWrites=true&w=majority`);

// mongoose.connect(`mongodb+srv://hospital-api:iknn0BdV4Uu8YlfC@skilltag.cqrlh79.mongodb.net/`);

mongoose.connect(`mongodb+srv://API:9ChUpQBupCz6AstE@cluster0.gdcw1lg.mongodb.net/?retryWrites=true&w=majority`);
// mongoose.connect(`mongodb://localhost:27017`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
    console.log("Successfully connected to the Database");
});

module.exports = db;