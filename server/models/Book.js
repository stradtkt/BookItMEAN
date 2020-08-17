const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    published: {
        type: Date,
        required: true
    },
    review: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }
});

module.exports = mongoose.model('Book', BookSchema);