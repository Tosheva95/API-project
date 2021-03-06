const mongoose = require('mongoose');

const filesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    files: [Object]
}, { timestamps: true });

module.exports = mongoose.model('MultipleFiles', filesSchema);