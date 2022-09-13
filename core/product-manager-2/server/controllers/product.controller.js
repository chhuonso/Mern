const Product = require('../models/product.model')

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then(allProducts => response.json(allProducts))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(newProduct => response.json(newProduct))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneID = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(oneProduct => response.json(oneProduct))
        .catch(err => response.json(err))
}