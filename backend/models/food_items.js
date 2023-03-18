const mongoose = require("mongoose");
const { Schema } = mongoose;
const fooditemsSchema = new Schema({
    CategoryName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    options: [
        {
            half: {type: String,},
            full: { type: String },
            small: { type: String },
            medium: { type: String },
            large: { type: String },
        },
    ],
});
module.exports = mongoose.model("fooditems", fooditemsSchema);
