const express = require('express');
const tags = require('../data/tags');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(tags);
});

module.exports = router;