const express = require("express");
const router = express.Router();
const userRouter = require("./patient");

router.use("/user", userRouter);

module.exports = router;