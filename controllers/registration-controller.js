var express=require('express');
var router=express.Router();
var userModel=require.main.require('./models/user-model');
//var adminModel=require.main.require('./models/admin-model');



router.get('/',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('registration/registration');

});

router.post('/',function(req,res){

	var user={
		name:req.body.name,
		username:req.body.username,
		pass:req.body.pass,
		cpass:req.body.cpass,
		email:req.body.email
	};
console.log("hello");
		userModel.insert(user,function(status){
			if(status)
			{
				req.session.email=req.body.email;
				//console.log("home");
				res.redirect('/home');
			}
			else
			{

				res.redirect('/registration');
			}

		});


});

module.exports=router;
