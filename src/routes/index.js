const express = require('express');
const mobilesRouter = require('./mobiles.js');
const manufacturersRouter = require('./manufacturers.js');


const router = express.Router();

router.use('/mobiles', mobilesRouter);
router.use('/manufacturers', manufacturersRouter);

module.exports = router;