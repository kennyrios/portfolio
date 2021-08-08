$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
	//	$('nav').toggle();
	if(contador == 1){
		$('nav').animate({
			left: '0'
		});
		contador = 0;

	}else {
		contador = 1;
		$('nav').animate({
			left: '-100%'
		});
	}
	});

};

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 5000) {
        //clearHeader, not clearheader - caps H
		$(".projectsfixed").addClass("nav_background");
    }else {
        $(".projectsfixed").removeClass("nav_background");
    }
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 12000) {
        //clearHeader, not clearheader - caps H
		$(".subject").addClass("purple");
    }else {
        $(".subject").removeClass("purple");
    }
});





/*
if ( $(window).scrollTop() >= $('#impresion').scrollTop() ) {
    $('#projectsfixed').addClass('nav_background');
    
} else{
	$('#projectsfixed').removeClass('nav_background');
}

*/

