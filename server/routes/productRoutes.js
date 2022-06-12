const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require("../controllers/productController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");
// protect, admin,
router.route("/").get(getProducts).post(createProduct);
router.route("/:id/reviews").post(createProductReview);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);

module.exports = router;
// protect, admin,
