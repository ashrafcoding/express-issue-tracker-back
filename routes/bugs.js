var express = require('express');
var router = express.Router();
const bugModel = require('../models/bugModel')


/* GET TEST listing. */
router.get('/', function(req, res, next) {
  bugModel.getAllbugs().then(bugs=>{
    res.send(bugs)
})  });

router.post('/', function(req, res, next) {
  bugModel.getAllbugs().then(bugs=>{
    res.send(bugs)
})  });

router.put('/', function(req, res, next) {
  bugModel.getAllbugs().then(bugs=>{
    res.send(bugs)
})  });

router.delete('/', function(req, res, next) {
  bugModel.getAllbugs().then(bugs=>{
    res.send(bugs)
})  });


module.exports = router;