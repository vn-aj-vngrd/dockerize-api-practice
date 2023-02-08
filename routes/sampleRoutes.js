const express = require("express");
const router = express.Router();
const sampleController = require("../controllers/sampleController.js");

router.get('/', sampleController.helloWorld);
router.get('/complicatedroute', sampleController.helloWorldButNotReally);
router.get('/:name', sampleController.helloWorldWithCustomName);

module.exports = router;