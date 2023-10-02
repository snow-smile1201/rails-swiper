/*global $*/
$(document).ready(function(){
  $('.jquery').mouseover(function(){
    $(this).css('color', 'red');
  });
  $('.jquery').mouseout(function(){
    $(this).css('color', 'black');
  });
});

const opt = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

$(document).on('turbolinks:load', function(){
  let swiper = new Swiper('.swiper', opt);
});