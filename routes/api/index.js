const router = require('express').Router();
const note = require('./note');

router.use(note);

module.exports = router;