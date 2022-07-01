$(document).ready(function() {
	$(window).scroll(function() {
        var winpos= $(window).scrollTop();
        $(".box-hidden").each(function(){
            var pos = $(this).offset().top;
            if(pos < winpos + 550){
                $(this).addClass('box-show');
            }		
        });
        $(".bieudo-hidden").each(function(){
            var pos2 = $(this).offset().top;
            if(pos2 < winpos + 550){
                $(this).addClass('bieudo-show');
            }		
        });
    });
})