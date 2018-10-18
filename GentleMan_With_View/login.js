
var CORRECT_USER ='tienptit';
var CORRECT_PASSWORD = 'tienptit';

var inputUsername = document.getElementById("username");
var inputPassword = document.getElementById("password");




var formLogin = document.getElementById("form-login");

if(formLogin.attachEvent){
	formLogin.attachEvent('submit', onFormSubmit);
}else{
	formLogin.addEventListener('submit', onFormSubmit);
}


function onFormSubmit(e){
	if(e.preventDefault) e.preventDefault();

	var username = inputUsername.value;
	var password = inputPassword.value;


	if(username == CORRECT_USER && password == CORRECT_PASSWORD){
		window.location = 'index.html';
	}
	else{
		var divErrors = document.getElementById('errors');
		divErrors.innerHTML = '<div class="alert alert-danger">'+
										'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+
										'<strong>Co loi xay ra</strong> Ten dang nhap sai hoac mat khau khong dung !'+
									'</div>';
	}
	return false;
}


