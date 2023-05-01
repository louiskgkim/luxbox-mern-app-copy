const mongoose = require('mongoose');

const { Schema } = mongoose;

const designerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;