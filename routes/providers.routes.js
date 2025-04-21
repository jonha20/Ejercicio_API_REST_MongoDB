const providerController = require("../controllers/provider.controllers");
const router = require("express").Router();

router.get("/", providerController.getallProvider);
router.post("/", providerController.createProvider);
router.put("/", providerController.updateProvider);
router.delete("/", providerController.deleteProvider);

module.exports = router;
