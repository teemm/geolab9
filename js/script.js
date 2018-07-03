// var burger = document.getElementById('burger');
// var menu = document.getElementById('menu');
// burger.addEventListener("click", function(){
// 	burger.classList.toggle('active');
// 	menu.classList.toggle('active');
// })

$("#burger").on('click', function(){
	$(this).toggleClass('active');
	$('#menu').toggleClass('active');
});

