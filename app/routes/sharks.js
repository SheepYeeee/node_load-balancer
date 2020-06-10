const express = require('express');
const router = express.Router();
const shark = require('../controllers/sharks');

router.get('/', function(req, res){
    shark.index(req,res);
});
router.get('/sharkList', function(req, res){
    shark.list(req,res);
});

router.post('/addshark', function(req, res) {
    shark.create(req,res);
});

router.get('/getshark', function(req, res) {
    shark.list(req,res);
});

router.post('/editshark', function(req, res) {
    shark.edit(req,res);
});

router.post('/deleteshark', function(req, res) {
    shark.del(req,res);
});

module.exports = router;
