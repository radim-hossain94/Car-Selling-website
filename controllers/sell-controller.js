var express=require('express');
var router=express.Router();
var carModel=require.main.require('./models/car-model');

router.get('/',function(req,res){

	//res.send("<script>alert('hello')</script>");
	res.render('sell/sell');

});


router.post('/',function(req,res){

	var user={
		email:req.session.email,
		carmodel:req.body.carmodel,
		price:req.body.price,
		mileage:req.body.mileage,

	};
console.log("hello");
		carModel.insert(user,function(status){
			if(status)
			{
				//req.session.email=req.body.email;
				//console.log("home");
				res.redirect('/user');
			}
			else
			{

				res.redirect('/sell');
			}

		});


});

module.exports=router;
