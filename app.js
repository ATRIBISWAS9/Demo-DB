require("dotenv").config();
const express = require("express");
const app = express();
const ConnectDB = require("./DB/Connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./Routes/Product");

app.get("/", (req, res) => {
    res.send("Hi, Demo DB Is Live !!");
});

app.use("/api/products", products_routes);

const start = async() =>{
    try {
        await ConnectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Connected`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
