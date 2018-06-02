//menu
var $menuOpen = $(".menu__button");
var $menu = $(".nav");

$menuOpen.on("click", function(event) {
  if ($menu.hasClass("show")) {
    $menu.removeClass("show");
  } else{
    $menu.addClass("show");
  }
});

//services
$(function(){
  $('.tab-nav li:first').addClass('select__item');
  $('.tab-box .tab-panels>.form__item').css('display','none').filter(":first").css('display','block');
  $('.tab-nav a').click(function(){
    $('.tab-box .tab-panels>.form__item').css('display','none').filter(this.hash).css('display','block');
    $('.tab-nav li').removeClass('select__item');
    $(this).parent().addClass('select__item');        
    return (false);
  });  
});

//stars
$(document).ready(function(){
  $('.rate2').raty({
    number : 5,
    starOff : 'img/rating_passiv.png',
    starOn  : 'img/rating_activ.png'
  });
});