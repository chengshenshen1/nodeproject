var express = require('express');
var fortune = require('./lib/fortune.js');

var app = express();

//设置handlebars试图引擎
var handlebars = require('express3-handlebars')
    .create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

//设置端口
app.set('port',process.env.PORT || 3000);

// 设置static中间件
app.use(express.static(__dirname + '/public'));

//设置测试
app.use(function (req,res,next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

//home 页面
app.get('/',function (req,res) {
    res.render('home');
});

//about 页面
app.get('/about',function (req,res) {
    res.render('about',{
        fortune:fortune.getFortune(),
        pageTestScript:'/qa/tests-about.js'
    });
});

//旅游路线页面
app.get('/tours/hood-river',function (req,res) {
   res.render('tours/hood-river');
});

app.get('/tours/request-group-rate',function (req,res) {
   res.render('tours/request-group-rate')
});
//404 catch-all 处理器 （中间件）
app.use(function (req,res,next) {
    res.status(404);
    res.render('404')
});

//500错误处理器
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.status(500);
    res.render('500')
});

app.listen(app.get('port'),function () {
    console.log('Express started on http://localhost:'+ app.get('post')+';press Crtl-C to terminate.')
});
