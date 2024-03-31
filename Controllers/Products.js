const Product = require("../Models/Product");

const getAllProducts = async(req, res) => {

    const {name, featured, catagory, sort, select} = req.query;
    const queryObject = {};
    if(name){
        queryObject.name = {$regex: name, $options: "i"};
    }
    if(featured){
        queryObject.featured = featured;
    }
    if(catagory){
        queryObject.catagory = catagory;
    }

    let apiData = Product.find(queryObject);
    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const ProductData = await apiData;
    res.status(200).json({ProductData, nbHits: ProductData.length});
};

module.exports = getAllProducts;
