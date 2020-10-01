var mysqlconn  = require('mysql');  
 
function myquery(response) {
    var connection = mysqlconn.createConnection({     
        host     : 'localhost',       
        user     : 'root',              
        password : 'mysqlpsd',       
        port: '3306',                   
        database: 'testnode' 
      }); 
      
      connection.connect();
      var res = []
      var  sql = 'SELECT * FROM testTable1';
      connection.query(sql,function (err, result) {
              if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
              }
              else {
                for (var i =0; i < result.length; i ++) {
                    res[i] = result[i].test_name;
                }
              }
             res = JSON.stringify(res);
             console.log('--------------------------SELECT----------------------------');
             console.log(result);
             console.log(res);
             console.log('------------------------------------------------------------\n\n'); 
             response.writeHead(200, {"Content-Type": "text/html"});
             response.write(res);
             response.end();
      });
      connection.end();
}

exports.myquery = myquery;


