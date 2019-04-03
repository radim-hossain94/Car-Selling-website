var express=require('express');
var router=express.Router();
var userModel=require.main.require('./models/user-model');
var adminModel=require.main.require('./models/admin-model');


router.get('/',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('login/index');

});

router.post('/',function(req,res){

	var user={
		email:req.body.email,
		pass:req.body.pass,
	};
	if(user.email=="admin"){
		adminModel.validate(user,function(status){
			if(status)
			{
				req.session.email=req.body.email;
				res.redirect('/admin');
			}
			else
			{

				res.redirect('/login');
			}

		});
	}
//console.log("hello");
		else{
			userModel.validate(user,function(status){
				if(status)
				{
					req.session.email=req.body.email;
					//console.log("home");
					res.redirect('/user');
				}
				else
				{

					//alert("You must register first");
					res.redirect('/login');
				}

			});
		}


});

module.exports=router;
