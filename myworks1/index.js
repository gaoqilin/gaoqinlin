var express=require('express');
var app=express();
app.use(require('body-parser')()); //解析parser过来的表单数据
//静态资源
app.use(express.static(__dirname + '/public'));
app.set('port',process.env.PORT || 2002);
//配置默认进入页面
app.get('/',function (req,res) {
    console.log('user in');
    res.type('text/html');
    res.send('<span style="color: green;">- welcome -</span>');
});
//表单提交
app.post('/user_in',function (req,res) {
    if(req.body){
        console.log(req.body.email);
        console.log(req.body.password);
        res.send('hello LOL')
    }else{
        console.log('Nothing Upon');
        res.send('error!!!!!')
    }
});
//404
app.use(function (req,res) {
    res.type('text/html');
    res.status(404);
    res.send('<span style="color: red;">404 - NOT Found</span>');
});
//500
app.use(function (req,res,err,next) {
    console.error(err,stack);
    res.type('text/html');
    res.status(500);
    res.send('<span style="color: red;">500 -Server Error</span>');
});
app.listen(app.get('port'),function () {
    console.log('Express Started on http://localhost:'+app.get('port')+':press Ctrl C to terminate');
});
