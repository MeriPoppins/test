//slider

$(document).ready(function(){
  $('.bxslider.slider1').bxSlider({
    auto: true,
    autoControls: true,
    slideWidth: 1000,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 0
  });
});

$(document).ready(function(){
  $('.bxslider.slider2').bxSlider({
    auto: true,
    autoControls: true,
    slideWidth: 1000,
    minSlides: 2,
    maxSlides: 2,
    moveSlides: 1,
    slideMargin: 0
  });
});

$(document).ready(function(){
  $('.bxslider.slider3').bxSlider({
    auto: false,
    autoControls: true,
    slideWidth: 1000,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
    infiniteLoop: false,
    hideControlOnEnd: true
  });
});

//form
$("#inputTel").mask("+7 (999) 999-99-99", {placeholder: " ", autoclear: false});

//popap

var $form = $(".booking__form");
var $popap = $(".modal-popap");
var $close = $(".modal-popap__close");
var $ovelay = $(".modal-overlay");
var $formPopap = $(".popap-booking__form");
var $popapForm = $(".modal-popap__form");
var $openFormPopap = $(".number--bnt");
var $closeFormPopap = $ (".modal-popap__form--close");
var $popapNumber = $(".modal-popap__number");
var $openPopapNumber = $(".number__img");
var $closePopapNumber = $ (".modal-popap__close--number");

$form.on("submit", function(event) {
  event.preventDefault();
  $.post(
    'http://kad11.ru/email.php',
    $form.serialize()
    ).always( function(){
        $form.find('input').val('');
        $form.find('textarea').val('');
        $popap.addClass("modal-popap--show");
        $ovelay.addClass("modal-overlay--show");
      });
});

$close.on("click", function(event) {
  event.preventDefault();
  $popap.removeClass("modal-popap--show");
  $ovelay.removeClass("modal-overlay--show");
});

$ovelay.on("click", function(event) {
  $popap.removeClass("modal-popap--show");
  $popapForm.removeClass("modal-popap__form--show");
  $popapNumber.removeClass("modal-popap__number--show");
  $ovelay.removeClass("modal-overlay--show");
});

$formPopap.on("submit", function(event) {
  event.preventDefault();
  $.post(
    'http://kad11.ru/email.php',
    $form.serialize()
    ).always( function(){
        $formPopap.find('input').val('');
        $formPopap.find('textarea').val('');
        $popap.addClass("modal-popap--show");
        $ovelay.addClass("modal-overlay--show");
        $popapForm.removeClass("modal-popap__form--show");
      });
});

$openFormPopap.on("click", function(event){
  event.preventDefault();
  $popapForm.addClass("modal-popap__form--show");
  $ovelay.addClass("modal-overlay--show");
});

$closeFormPopap.on("click", function(event){
  event.preventDefault();
  $popapForm.removeClass("modal-popap__form--show");
  $ovelay.removeClass("modal-overlay--show");
});

$openPopapNumber.on("click", function(event) {
  event.preventDefault();
  $popapNumber.addClass("modal-popap__number--show");
  $ovelay.addClass("modal-overlay--show");
});

$closePopapNumber.on("click", function(event){
  event.preventDefault();
  $popapNumber.removeClass("modal-popap__number--show");
  $ovelay.removeClass("modal-overlay--show");
});

// menu

var $link = 

$(document).ready(function() {
 var start_pos=$('#wrap').offset().top;
 $(window).scroll(function(){
   if ($(window).scrollTop()>=start_pos) {
       if ($('#wrap').hasClass()==false) $('#wrap').addClass('fix-navbar-top');
   }
   else $('#wrap').removeClass('fix-navbar-top');
 });
});