var mysql = require('mysql');
var db = require('./db_connection.js');


/* DATABASE CONFIGURATION */

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    //var query = 'SELECT * FROM village ORDER BY village_id;';
    var query = 'SELECT * FROM dorm_villages;';


    connection.query(query,function(err,result){
        callback(err,result);
    });
};

