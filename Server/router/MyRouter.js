const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getAll,
  deleteWork,
  updateWork,
} = require("../controller/Controller");
router.post("/register", register);
router.post("/login/:email/:password", login);
router.get("/", getAll);
router.delete("/delete/:email", deleteWork);
router.patch("/update", updateWork);

module.exports = router;
