var express=require('express');
var app=express();
//静态资源
app.use(express.static(__dirname+'/public'));
app.set('port',process.env.PORT ||2003);
app.get('/',function (req,res) {
    console.log('user in');
    res.type('text/html');
    res.send('<span style="color:green;">- welcome -</span>');
});
//404
app.use(function (req,res) {
    res.type('text/html');
    res.status(404);
    res.send('<span style="color: red;">404 -NOT Found</span>');
});
//500
app.use(function (req,res,err,next) {
    console.error(err,stack);
    res.type('text/html');
    res.status(500);
    res.send('<span style="color:red;">500 -Server Error</span>')
});
app.listen(app.get('port'),function () {
    console.log('Express Started on http://localhost:'+app.get('port')+':press Ctrl C to terminate');
});