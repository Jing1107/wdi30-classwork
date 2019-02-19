console.log("0000");

$(document).ready(function (){
  $('button').on('mouseover', function() {
    $(this).css('background-color','pink');
  });

  $('button').on('mouseout', function() {
    $(this).css('background-color','initial');
  });
//
//   // $('button').hover (function () {
//   //   $(this)css('background-color','pink');
//   // }, function () {
//   //   $(this)css('background-color','initial');
//   // })
  $('#name').on('keyup', function() {
    //update the heading with input
    const name = $(this).val();
    $('header h1').text(`Welcome ${name}`);
  }).on('focus', function (){
    $('header').addClass('active');
  }).on('blur',function (){
    $('header').removeClass('active');
  });

  const randomColor = function () {
    return Math.random() * 255;
  }
  console.log(randomColor());

  $(window).on('mousemove',function (){
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    $('body').css('background-color', bgColor);
  });

  $(window).on('mousemove',function (event) {
    //console.log(event.clientY);
    //get the mouse y position as a percentage of the window
    const opacity = (window.innerHeight - event.clientY) / window.innerHeight;
    $('img').css('opacity',opacity);
  })

});
