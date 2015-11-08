var express = require('express');

var app = express();
var port = process.env.PORT || 2000;

app.get('/', function(req, res){
res.send('welcome to my API');

});


app.listen(port,function(){
console.log('works on :' + port);
});

