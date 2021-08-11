var express = require('express');
var router = express.Router();
const bugModel = require('../models/bugModel')

/* GET home page. */
router.get('/', function(req, res, next){
 
     bugModel.getAllbugs().then(bugs=>{
        res.send(bugs)
    })  
});

module.exports = router;
