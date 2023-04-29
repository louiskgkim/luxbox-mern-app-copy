const mongoose = require('mongoose');

const { Schema } = mongoose;

const colorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;