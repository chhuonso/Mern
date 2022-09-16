const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 char long"]
    },
    select : {
        type: String,
        required: [true, "{PATH} must select an option"],
    },
    isChecked : {
        type: Boolean,
        default: false
    },

}, {timestamps: true})

// CREATE THE SCHEMA AND EXPORT IT
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;