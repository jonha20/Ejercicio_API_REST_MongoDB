const productsController = require('../controllers/products.controllers');
const router = require('express').Router();

router.get("/", productsController.getProduct);
router.post("/", productsController.createProduct);
router.put("/", productsController.updateProduct);
router.delete("/", productsController.deleteProduct);

module.exports = router;