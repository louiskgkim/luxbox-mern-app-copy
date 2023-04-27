const db = require('../config/connection');
const { Product, User } = require('../models');

const productData = require('./productData.json');
const userData = require('./userData.json');

db.once('open', async () => {
    try {
        // Clean database
        await Product.deleteMany({});
        await User.deleteMany({});

        // Bulk create each model
        await Product.insertMany(productData);
        await User.insertMany(userData);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Seed complete!');
    process.exit(0);
});