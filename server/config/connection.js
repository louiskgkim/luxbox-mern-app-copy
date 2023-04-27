const mongoose = require('mongoose');

const dbName = 'luxbox_db'

mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`Successfully connected to ${dbName}`);
    })
    .catch((error) =>
        console.log(`mongoose connection to ${dbName} failed:`, error)
    );

module.exports = mongoose.connection;