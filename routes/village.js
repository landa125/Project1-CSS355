var express = require('express');
var router = express.Router();
var village_dal = require('../dal/village_dal');

/*Get users listing. */

router.get('/all',function(req,res,next){
   village_dal.getAll(function (err,result) {
       if(err) {
          console.log(err);
          res.send(err);
       } else {
          console.log(result);
          res.render('village/village_view_all',{villages:result});
       }
   })
});

router.get('/add',function(req,res){
    res.render('village/village_add');
});

router.get('/insert', function(req, res) {
    village_dal.insert(req.query, function(err, result) {

        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302, '/village/all');
        }
    });
});
module.exports = router;
