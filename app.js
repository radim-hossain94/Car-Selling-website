//Declaration
var express=require('express');
var app=express();
var loginController=require('./controllers/login-controller');
var homeController=require('./controllers/home-controller');
var registrationController=require('./controllers/registration-controller');
var userController=require('./controllers/user-controller');
var adminController=require('./controllers/admin-controller');
var logoutController=require('./controllers/logout-controller');
var sellController=require('./controllers/sell-controller');
var bodyParser=require('body-parser');
var path = require('path');
var multer=require("multer");
var expressSession=require('express-session');
var uploadController=require('./controllers/upload-controller');
var buyController=require('./controllers/buy-controller');
var port=1337;

//Configuration
app.set('view engine','ejs');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret:"My secret is secret",saveUninitialized:true,resave:false}));
app.use('/contents',express.static('contents'));
app.use(express.static('ext'));
app.use(express.static('search'));
app.use(express.static('./public'));
//app.use(express.static(path.join('contents')));
//Routes
//app.use('/',loginController);
app.use('/login',loginController);
app.use('/home',homeController);
app.use('/registration',registrationController);
app.use('/user',userController);
app.use('/logout',logoutController);
app.use('/admin',adminController);
app.use('/sell',sellController);
app.use('/buy',buyController);
app.use('/upload',uploadController);
app.use('/',homeController);
//Server Start-up
app.listen(port,function(){
	console.log("Server Started...");
});
