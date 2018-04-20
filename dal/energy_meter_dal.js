var mysql = require('mysql');
var db = require('./db_connection.js');

/* DATABASE CONFIGURATION */

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM energy_meter ORDER BY meter_id;';

    connection.query(query,function(err,result){
        callback(err,result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO energy_meter(meter_id, meter_name, avg_annual_energy_consumed,year) VALUES (?,?,?,?)';
    var queryData = [params.meter_id, params.meter_name, params.avg_annual_energy_consumed, params.year];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};