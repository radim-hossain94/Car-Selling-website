var db=require('./db');

module.exports={

  getAll:function(callback)
	{
		var sql="SELECT * from car";
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
  insert:function(user,callback)
	{
    console.log("hi");
		var sql="INSERT INTO car VALUES(null,?,?,?,?)";
		if(user.carmodel=="" || user.price=="" || user.mileage==""){
			callback(false);
		}
		else{
			db.execute(sql,[user.email,user.carmodel,user.price,user.mileage],function(result){
					if(result)
					{
            console.log("true");
						callback(true);
					}
					else
					{
            console.log("false");
						callback(false);
					}

			});
		}


	},
  delete:function(id,callback)
	{
		var sql="DELETE from car where id=?";
		db.execute(sql,[id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},

  searchByName:function(carmodel,callback)
	{
		var sql="SELECT * from car WHERE carmodel =?";
		db.getResult(sql,[carmodel],function(result){

				if(result.length>0)
				{

					callback(result);
				}
				else
				{

					callback([]);
				}

		});
	}
};
