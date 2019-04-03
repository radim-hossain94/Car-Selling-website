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
			res.render('buy/buy',{email:req.session.email,list:result});
		}
		else
		{
			res.redirect('/user');
		}
	});


});


router.get('/buy/:id',function(req,res){

	res.render('buy/index',{id:req.params.id});

});

router.post('/buy/:id',function(req,res){


		carModel.delete(req.params.id,function(status){

			if(status)
			{
				console.log(req.params.id);
				res.redirect('/buy');
			}
			else
			{
				res.send('Error in deleting...');
			}
		})

});
module.exports=router;
