"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home); // localhost:3000
router.get("/login", ctrl.login); // localhost:3000/login

module.exports = router;