const {Product} = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}


module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then(allProducts => response.json({product: allProducts}))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createProduct = (request , response) => {
    const {title, price, description} = request.body;
    Product.create({
        title,
        price,
        description
    })

    .then(product => response.json(product))
    .catch(err=>response.json(err))
}