const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: mongoose.Types.ObjectId,
        ref:"Author"
    }
});

module.exports = mongoose.model("Book", BookSchema);