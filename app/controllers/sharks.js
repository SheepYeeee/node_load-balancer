const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/sharks.html'));
};
exports.golist = function (req, res) {
    res.sendFile(path.resolve('views/getshark.html'));
};

exports.create = function (req, res) {
    var newShark = new Shark(req.body);
    console.log(req.body);
    newShark.save(function (err) {
        if(err) {
            res.status(400).send('Unable to save shark to database');
        } else {
            res.redirect('/getshark.html');
        }
  });
};

exports.edit = function (req, res) {
    console.log(req.body);

    Shark.update({name: req.body.name},{info: req.body.info}, function (err) {
        if(err) {
            res.status(400).send('Unable to save shark to database');
        } else {
            res.status(200)
                .json('is work');
        }
    });
};

exports.del = function (req, res) {
    var _name = req.body.name;
    var _info = req.body.info;
    Shark.remove(({name: _name},{info: _info}), function (err, result) { 
        if (err){ 
            return res.send(500, err);
        }
        res.status(200)
            .json(result);
    }); 

};

exports.list = function (req, res) {
    Shark.find({}).exec(function (err, sharks) {
        if (err) {
                return res.send(500, err);
        }
        res.status(200)
            .json(sharks);
    });
};
