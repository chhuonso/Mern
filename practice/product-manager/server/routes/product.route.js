const ProductController = require("../controllers/product.controller");

module.exports = function(app){
    app.get('/api', ProductController.findAllProducts);
    app.post('/api/product/new', ProductController.createProduct)
};

