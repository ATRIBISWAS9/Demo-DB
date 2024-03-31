const mongoose = require("mongoose");

// uri = "mongodb+srv://demodb:wyA3z2dw!%23w-WXa@cluster0.sglnkpu.mongodb.net/";

const ConnectDB = (uri) => {
    console.log("Connected To Database");
    return mongoose.connect(uri);
};

module.exports = ConnectDB;