console.log("awa");

// $(document).ready(function() {
//    //$('div').hide().show(5000);
//    const words = $('#words').text().split(/[ ,.);
//
//    const body = $('body')
//
//    const random = function (max) {
//      return Math.floor(Math.random() * max);
//    }
//
//    const putWord = function () {
//      const randonmIndex = random ( words.length );
//      const text = words [randonmIndex];
//      const $div = $('<div class="word">').html(text);
//      $div.css({
//        top : random(window.innerHeight) + 'px',
//        left: random(window.innerWeight) + 'px',
//        fontSize: (40 + random(80)) + 'px',
//       // color: `rgb($(random(360)))`
//      })
//    }
// });

const randomPosition = function (div) {
  $(div).css({position: "absolute", top: Math.random() * $(window).height(), left: Math.random() * $(window).width()})
}

const randomWord = function () {
  const random = $("#text-container").text().split(/[ ,.:""\n\-]+/)[Math.floor(Math.random() * $("#text-container").text().split(/[ ,.:""\n\-]+/).length)];
  const $div = $("<div class='word'></div>").html(random);
  $("body").append($div);
  randomPosition($div);
  $div.fadeIn(1000).fadeOut(2000);
}

$(document).ready(function () {
  setInterval(randomWord, 100);
})


// const randomPicking = function () {
//     return Math.random() * 255;
//   }
//   console.log(randomPicking());
//
//   $(window).on('mousemove',function (){
//       const pickingText = $('p');//随意挑选字母
//       $('body').css('div', pickingText);
//     });
//
//
// const pickWord = function (a) {
//   let a = $('p').length;
//   for (let i = 0; i < a; i ++) {
//   console.log(a[i]);
//   }
// }
