const express = require('express');
const router = express.Router();
const shark = require('../controllers/sharks');

router.get('/', function(req, res){
    shark.golist(req,res);
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
