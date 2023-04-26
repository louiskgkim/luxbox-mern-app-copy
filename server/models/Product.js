const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    color: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    onSale: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

const Product = model('Product', productSchema);

module.exports = Product;