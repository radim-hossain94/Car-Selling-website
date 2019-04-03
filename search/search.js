$(document).ready(function(){

$("button").click(function(){


	$.ajax({
		url:"/user/getData",
		method:"post",
		data:{
			carmodel:$('#nam').val()
		},
		success:function(res){
			$("#par").html("<table border='1' class='table table-hover'><tr class='info'><th>ID</th><th>Email</th><th>Car Model</th><th>Price</th><th>Mileage</th></tr><tr><td>"+res.id+"</td> <td>"+res.email+"</td> <td>"+res.carmodel+"</td> <td>"+res.price+"</td> <td>"+res.mileage+"</td></tr></table>");
			//document.write(res);
		}
	});
});


});
