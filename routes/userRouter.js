const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  // patchCar
} = require("../controllers/userControllers");
 
// GET /cars
router.get("/", getAllUser);

// POST /cars
router.post("/", createUser);

// GET /cars/:carId
router.get("/:userId", getUserById);

// PUT /cars/:carId
router.put("/:userId", updateUser);

// DELETE /cars/:carId
router.delete("/:userId", deleteUser);

// Update car using PATCH 
// router.patch('/:carId', patchCar)

module.exports = router;
