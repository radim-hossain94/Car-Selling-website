var express=require('express');
var router=express.Router();
//var userModel=require.main.require('./models/user-model');
//var adminModel=require.main.require('./models/admin-model');


router.get('/',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('home/home');

});

//
/*
router.post('/',function(req,res){

	//var sql="SELECT * from user WHERE username='"+req.body.username+"' and password='"+req.body.password+"'";
	var user={
		username:req.body.username,
		password:req.body.password
	};
	if(user.username =='admin'){
			adminModel.validate(user,function(result){

		if(result)
		{
			req.session.un=req.body.username;
			res.redirect('/adminhome');	
			console.log("true");		
		}
		else
		{
			res.redirect('/login');
		}

	});

	}
	else{
	userModel.validate(user,function(result){

		if(result)
		{
			req.session.un=req.body.username;
			res.redirect('/home');			
		}
		else
		{
			res.redirect('/login');
		}

	});
}


	/*if(req.body.username==req.body.password)
	{
		req.session.un=req.body.username;
		res.redirect('/home');
	}
	else
	{
		res.redirect('/login');
	}*/


//});



module.exports=router;
