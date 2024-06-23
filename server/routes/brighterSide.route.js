const express = require("express");

const brighterSideController = require("../controllers/brighterSide.controller");

const router = express.Router();

router.get("/get-data", brighterSideController.getJsonData);
router.get("/render-video", brighterSideController.renderVideo);

module.exports = router;