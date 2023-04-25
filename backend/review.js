const mongoose = require('mongoose');

const Review = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        number: { type: Number, required: true, unique: true },
        subject: { type: String, required: true }
    },
    { collection: 'review-data' }
)

const model = mongoose.model('Reviewdata', Review);

module.exports = model;