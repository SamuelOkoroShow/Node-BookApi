var express = require('express');


var app = express();
var port = process.env.PORT || 2000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res){
        var responseJson = {
            hello: "This is my API"
        }
        res.json(responseJson);
    });



app.use('/api', bookRouter);




app.get('/', function(req, res){
    res.send('welcome to my API');

});


app.listen(port, function(){
    console.log('works on :' + port);
});
