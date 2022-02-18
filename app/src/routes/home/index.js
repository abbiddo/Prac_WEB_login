"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home); // localhost:3000
router.get("/login", ctrl.output.login); // localhost:3000/login
router.post("/login", ctrl.process.login);

module.exports = router;