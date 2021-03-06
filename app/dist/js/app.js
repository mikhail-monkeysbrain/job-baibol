var fixed_offset = 100;

$(document).ready(function(){
	$(".slider").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    dots:false,
    autoplay:true,
    responsive:{
      0:{
        items:1 
      },
      1024:{
        items:3
      }
    }
  });
});


$(function(){
  $(window).scroll(function(){
    roll = $(window).scrollTop();
    if(roll > 65){
      $('header').addClass('fix');
    }
    else{
      $('header').removeClass('fix');
    }
  });
});


$(document).ready(function() {
  $("nav").on('click', '[href*="#"]', function(e){
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    $('.menu').toggleClass('open');
    $(".burger-menu").removeClass("menu-on");
  });
});

(function(){
  $(".step__after")
    .animate({
        opacity: 0.1}, 700)
    .animate({
        opacity: 1}, 700, arguments.callee)
}());

(function(){
  $(".step__before")
    .animate({
        opacity: 1}, 700)
    .animate({
        opacity: .1}, 700, arguments.callee)
}());

$(function(){
  $(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    $('.menu').toggleClass('open');
  });
});


$(function() {
  $(".tabs").tabs();
});

$(function(){
  $('.js-job button').click(function(f){
    var attrib = $(this).parent('.js-job').attr('data-job');
    var attrib2 = $(this).parent('.js-job').attr('data-depth-2');
    console.log(attrib2);
    $("." + attrib).trigger( "click" );
    $("." + attrib2).trigger( "click" );
    $('html,body').stop().animate({ scrollTop: $('#job').offset().top - fixed_offset }, 1000);
    f.preventDefault();
  });
});

//location

$(".form-select").change(function(){
  var bodyClass = this.options[this.selectedIndex].value;
  $('body').toggleClass(bodyClass);
});

$(function(){
  $('.city-change').click(function(){
    $('.js-list').show(500);
  });
  $('.change').click(function(){
    var city = $(this).attr('data-city');
        cityText = $(this).text();
    $('body').removeAttr('class');
    $('body').addClass(city);
    $('.city-change').text(cityText);
    $('.js-list').hide(500);

  });
});

$(function(){
  $('.menu--item__lang').click(function(){
    $('.js-list-language').show(500);
  });
});



$(function(){
  $('.btn__red').click(function(){
    $('.overlay').show(500);
  });
  $('.close').click(function(){
    $('.overlay').hide(500);
  });
});