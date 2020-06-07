'use strict';
//comp2068 - lab2 simple calculator 
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    console.log(req.query);
    console.log(req.query.method)
    function Lab2(x, y, method) {

        if (method == "1.)add") {
            console.log(x + y)
        }
        else if (method == "2.)subtract") {
            console.log(x - y)
        }
        else if (method == "3.)multiply") {
            console.log(x * y)
        }
        else if (method == "4.)divide") {
            console.log(x / y)
        }
        else {
            console.log("Error please enter add,sub,multiply or divide")
        }
    }
    Lab2(parseInt(req.query.x), parseInt(req.query.y), req.query.method)
    res.render('index', { title: 'Comp2068 Lab-2 Simple calculator' });
});
module.exports = router;
