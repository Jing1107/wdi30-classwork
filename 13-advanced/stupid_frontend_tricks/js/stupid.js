$(document).ready(() => {
  const $bill = $('.bill-js');
  const $body = $('body');

  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', scrollTop * 0.5);
    $body.css('background-position-y', scrollTop / 3);
  });

  $(window).on('mouseover', (e) => {
    //console.log(e);
    // const x = e.pageX;
    // const y = e.pageY;
    const {pageX:x, pageY:y} = e;

    const size = Math.random() * 10 + 'em';

    const $bubble = $('<div class="bubble" />').css({
      top: y,
      left: x,
      width: size,
      height: size
    });

    $bubble.appendTo($body);

    // each $bubble exsits within its own clouse
    $bubble.animate({top: -200}, 7000, () => {
      $bubble.remove();
    });
    //$bubble.fadeOut(2000);
    //console.log(x, y);
  });
});
