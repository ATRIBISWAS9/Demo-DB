require("dotenv").config();
const ConnectDB = require("./DB/Connect");
const Product = require("./Models/Product");

const ProductJson = require("./Products.json");

const start = async() => {
    try {
        await ConnectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Success!!");
    } catch (error) {
        console.log(error);
    }
};

start();