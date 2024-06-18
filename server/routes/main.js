
const express = require('express');
const router = express.Router();

router.get('/', (res, req) => {
    res.render('Hello World!');
})

module.exports = router;