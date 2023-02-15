const express = require("express");
const api = require("./api");
const auth = require("./auth");
const web = require('./web')
const router = express.Router();

router.use('/', web);
router.use("/", auth);

router.use("/api", api); // localhost:3000/api

module.exports = router;