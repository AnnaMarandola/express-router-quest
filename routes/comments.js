const express =require ('express');
const fakeComments =require('../data/comments');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(fakeComments);
    });

module.exports = router;