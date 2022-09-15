const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 2 char long"]
    },

}, {timestamps: true})

// CREATE THE SCHEMA AND EXPORT IT
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;