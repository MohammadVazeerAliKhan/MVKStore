import express from "express";
import {
  getUserById,
  getUsers,
  registerUser,
  getUserProfile,
  logoutUser,
  updateUser,
  updateUserProfile,
  deleteUser,
  authUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middelware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router;
