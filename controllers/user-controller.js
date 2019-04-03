var express=require('express');
var router=express.Router();
var carModel=require.main.require('./models/car-model');

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

	carModel.getAll(function(result){
		if(result.length > 0)
		{
			res.render('user/userhome',{email:req.session.email,list:result});
		}
		else
		{
			res.redirect('/login');
		}
	});

	router.post('/getData',function(req,res){

		carModel.searchByName(req.body.carmodel,function(result){
			if(result.length>0)
			{
				console.log("true");
				res.send(result[0]);
			}
			else
			{
				res.send("Not found...");
			}
		});


	});

});


module.exports=router;
