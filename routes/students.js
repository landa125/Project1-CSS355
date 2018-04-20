var express = require('express');
var router = express.Router();
var students_dal = require('../dal/students_dal');
var dormitory_dal = require('../dal/dormitory_dal');
/*Get users listing. */

router.get('/all',function(req,res,next){
    students_dal.getAll(function (err,result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('students/students_view_all',{students:result});
        }
    })
});


router.get('/add',function(req,res){
    dormitory_dal.getAll(function(err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('students/students_add', {dormitory_result: result[0]});
        }
    });
});

router.get('/insert', function(req, res) {
    students_dal.insert(req.query, function(err, result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/student/all');
        }
    });
});
module.exports = router;

