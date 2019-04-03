var db=require('./db');

module.exports={

	validate:function(user,callback)
	{
		var sql="SELECT * from admin WHERE email=? and pass=?";
		db.getResult(sql,[user.email,user.pass],function(result){
				if(result.length>0)
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
	},
	getAll:function(callback)
	{
		var sql="SELECT * from user";
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
	delete:function(id,callback)
	{
		var sql="DELETE from user where id=?";
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
/*
	getAll:function(callback)
	{
		var sql="SELECT * from user";
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
		insert:function(user,callback)
	{
		var sql="INSERT INTO employee VALUES(null,?,?,?,?)";
		if(user.username=="" ||user.password==""){
			callback(false);
		}

		else
			{		db.execute(sql,[user.ename,user.contact,user.username,user.password],function(result){
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

	},

	getById:function(id,callback)
	{
		var sql="SELECT * from employee WHERE id=?";
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},
    	update:function(user,callback)
	{
		var sql="UPDATE employee SET ename=?,contact=?,username=?,password=? where id=?";
		db.execute(sql,[user.ename,user.contact,user.username,user.password,user.id],function(result){
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
		delete:function(id,callback)
	{
		var sql="DELETE from employee where id=?";
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

	searchByName:function(name,callback)
	{
		var sql="SELECT * from employee WHERE ename=?";
		db.getResult(sql,[name],function(result){

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
*/

};
