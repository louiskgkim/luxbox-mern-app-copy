const db = require('../config/connection');
const { Product } = require('../models');

const productData = require('./productData.json');

db.once('open', async () => {
    try {
        // Clean database
        await Product.deleteMany({});

        // Bulk create each model
        await Product.insertMany(productData);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Seed complete!');
    process.exit(0);
});