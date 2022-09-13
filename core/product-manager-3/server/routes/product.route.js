const ProductController = require('../controllers/product.controller')

module.exports = function(app){
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.findOneID);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}