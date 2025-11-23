const express = require("express");
const router = express.Router();
const {
 
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  // patchCar
} = require("../controllers/blogController");
 
// GET /cars
router.get("/", getAllBlogs);

// POST
router.post("/", createBlog);

// GET
router.get("/:blogsId", getBlogById);

// PUT 
router.put("/:blogsId", updateBlog);

// DELETE 
router.delete("/:blogsId", deleteBlog);

// Update car using PATCH 
// router.patch('/:carId', patchCar)

module.exports = router;
