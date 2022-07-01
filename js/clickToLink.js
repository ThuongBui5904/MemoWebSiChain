$(document).ready(function() {
    $("a[href*='#']:not([href='#])").click(function() {
      let target = $(this).attr("href");
      $('html,body').stop().animate({
        scrollTop: $(target).offset().top-90
      }, 200);
      e.preventDefault();
    });
});