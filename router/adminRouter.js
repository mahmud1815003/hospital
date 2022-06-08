//External 
const express = require('express');

const router = express.Router();

//internal 
const {adminControler} = require('../controller/adminController');

//indexRouter
router.get('/', adminControler);

module.exports = router;