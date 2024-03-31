const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    p_name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price Must Be Provided "],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    catagory: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 4.7,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    brand: {
        type: String,
        default: "Fashanista's Haven",
    },
    description: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model("Product", productSchema);