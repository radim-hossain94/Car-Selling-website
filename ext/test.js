$(document).ready(function() {
  //alert("hello");
  //$("#mydatepicker").datepicker();
  $("button").click(function() {
    var n = 0;
    var name = $("#name").val();
    var username = $("#username").val();
    var pass = $("#pass").val();
    var cpass = $("#cpass").val();
    var email = $("#email").val();
    //var mobile=$("#mobile").val();

    //first name
    if (firstnamevalidate(name) != true) {
      $('#error_name').show();
      $('#error_name').html('Invalid Name');
      $('#error_name').css("color", "red");
      n = n + 1;
    } else {
      $('#error_name').hide();
    }

    //last name
    if (lastnamevalidate(username) != true) {
      $('#error_uname').show();
      $('#error_uname').html('Invalid username Name');
      $("#error_uname").css("color", "red");
      n = n + 1;
    } else {
      $('#error_uname').hide();
    }

    //email
    if (emailvalidate(email) != true) {
      $('#error_email').show();
      $("#error_email").html("Invalid email address");
      $("#error_email").css("color", "red");
      n = n + 1;
    } else {
      //$('#error_email').hide();
    }

    //pass
    if (passwordvalidate(pass) != true) {
      $('#error_pass').show();
      $("#error_pass").html("Password length must be 10 digit or below 10 digit");
      $("error_pass").css("color", "red");

      n = n + 1;
    } else {
      //$('#error_pass').hide();
    }


    //cpass
    if (cpasswordvalidate(pass, cpass) != true) {
      $('#error_cpass').show();
      $("#error_cpass").html("Password doesn't match!!  try again");
      $("error_cpass").css("color", "red");
      n = n + 1;
    } else {
      $('#error_cpass').hide();
    }


    /*
    //mobile
    if(mobilevalidate(mobile)!=true){
    	$("#error_mobile").show();
    	$("#error_mobile").html("Invalid Phone Number");
    	n=n+1;
    }
    else{
    	$("#error_mobile").hide();
    }

    /*
    if(gendervalidate(gender)!=true){
    	$('#error_gender').show();
    	$('#error_gender').html('Invalid First Name');
    	n=n+1;
    }
    else{
    	$('#error_gender').hide();
    }
    */


    if (n == 0) {
      status = true;
      alert("You Register Successfully");
    } else {
      status = false;
      alert("You must have done something Wrong");
    }



  });

});

function lastnamevalidate(username) {
  var lname = document.getElementById("username").value;
  var letters = /^[A-Za-z]+$/;
  if (lname == "" || lname.length <= 3 || letters.test(lname) == false) {
    return false;
  } else {
    return true;
  }
}

function emailvalidate(email) {
  var email = document.getElementById("email").value;
  var emailreg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (email == "" || emailreg.test(email) == false) {
    return false;
  } else {
    return true;
  }
}


function passwordvalidate(pass) {

  var pass = document.getElementById("pass").value;


  if (pass == "" || pass.length >= 11) {

    return false;
  } else {
    return true;
  }


}


function cpasswordvalidate(pass, cpass) {

  var pass = document.getElementById("pass").value;
  var cpass = document.getElementById("cpass").value;

  if (cpass == "" || cpass != pass) {
    return false;
  } else {
    return true;
  }


}






function firstnamevalidate(name) {
  var fname = document.getElementById("name").value;
  var letters = /^[A-Za-z]+$/;


  if (fname == "" || fname.length <= 3 || letters.test(fname) == false) {
    return false;
  }

  return true;

}
