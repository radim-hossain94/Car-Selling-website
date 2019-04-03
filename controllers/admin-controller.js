var express=require('express');
var router=express.Router();
//var userModel=require.main.require('./models/user-model');
var adminModel=require.main.require('./models/admin-model');

router.get('*',function(req,res,next){
	if(req.session.email==null)
	{
		res.redirect('/login');
	}
	else
	{
		next();
	}
});

router.get('/',function(req,res){

	adminModel.getAll(function(result){
		if(result.length > 0)
		{

			res.render('admin/adminhome',{email:req.session.email,list:result});
		}
		else
		{
			res.redirect('/login');
		}
	});


});


router.get('/admin/:id',function(req,res){

	res.render('admin/index',{id:req.params.id});

});

router.post('/admin/:id',function(req,res){

	if(req.body.yes)
	{
		adminModel.delete(req.params.id,function(status){

			if(status)
			{
				res.redirect('/admin');
			}
			else
			{
				res.send('Error in deleting...');
			}
		})
	}
	else
	{
		res.redirect('/admin');
	}

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
