


$(document).ready(function(){


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
		$('body').removeAttr('style');
		window.location = '#loader';
		$('#main').css('visibility','hidden');
		$('.main-html').removeAttr('style');
		$('.se-pre-con').css('visibility','visible').delay(3000).fadeOut("fast");;
		
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

	//Preloading.....

	//Scroll spy
	$('body').scrollspy({ target: '#my-nav' });
	// $('.navbar-brand').click(function(){
	// 	$(window).location.reload(true);
	// })
	// Xu ly nav ul li
	$('nav ul li').click(function(){
			$('nav ul li').removeClass('active');
			$(this).addClass('active');
		});

	//**********
	$hieuung = $('.portfolio_items').isotope({
  	// options
	  itemSelector: '.portfolio_item',
	  layoutMode: 'masonry'
	});
	
		$hieuung.imagesLoaded().progress( function() {
	 	 $hieuung.isotope('layout');
	});

		
		//xử lí nút trong div.danhmuc

		$('.portfolio_menu li a').click(function(){
			$('.portfolio_menu li a').parent().removeClass('active');
			$(this).parent().addClass('active'); //het xu ly chuyen mau


			tendanhmuc = $(this).attr('href');
			// console.log(tendanhmuc);
			$hieuung.isotope({filter:tendanhmuc})

			return false;
		});
		//slide track
		$('.slick-track-img').slick({
						  slidesToShow: 4,
						  slidesToScroll: 1,
						  autoplay: true,
						  autoplaySpeed: 1000,
						});
});

