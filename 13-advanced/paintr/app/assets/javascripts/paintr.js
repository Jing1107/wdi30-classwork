$(document).ready(function(){
 $('#add-color').on('click',() => {
   const color = $('#color').val();

   const $swatch = $('<div />').addClass('swatch').css('background-color', color);
   $swatch.appendTo('.palette');
 });
 $('.palette').on('click','.swatch',function(){
   // alert('1');
   $('.selected').removeClass('selected');
   $(this).addClass('selected');
 });
 $('.canvas').on('mouseover','.pixel', function(){
   const color = $('.swatch.selected').css('background-color');
   $(this).css('background-color', color);
 });
});
