const productsController = require('../controllers/products.controllers');
const router = require('express').Router();

router.get("/:id?", productsController.getProduct);
router.post("/", productsController.createProduct);

module.exports = router;