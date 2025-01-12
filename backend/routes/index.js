const express = require("express");
const router = express.Router();
const userRouter = require("./patient")
router.use("/user", userRouter);
// router.use("/diet", dietRouter);

module.exports = router;