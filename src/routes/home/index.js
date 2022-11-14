"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

//login 경로에 대해 post로 받을 수 있는 api 생성.
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router;