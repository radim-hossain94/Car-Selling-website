var db=require('./db');

module.exports={

	validate:function(user,callback)
	{

		var sql="SELECT * from user WHERE email=? and pass=?";
		if(user.email=="" || user.pass==""){
			callback(false);
		}
		else{
			db.getResult(sql,[user.email,user.pass],function(result){
					if(result.length>0)
					{
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
	insert:function(user,callback)
	{
		var sql="INSERT INTO user VALUES(null,?,?,?,?,?)";
		if(user.name=="" || user.username=="" || user.pass=="" || user.cpass=="" || user.email==""){
			callback(false);
		}
		else{
			db.execute(sql,[user.name,user.username,user.pass,user.cpass,user.email],function(result){
					if(result)
					{
						callback(true);
					}
					else
					{
						callback(false);
					}

			});
		}


	}

};
