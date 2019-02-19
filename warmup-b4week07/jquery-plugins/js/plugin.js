console.log("000000");

$('h1').funText(10, 'rainbow');
$('a').funText(30, 'rainbow');
//$('h3').funText(100, 'rainbow');

const $links = $('ul a');

for (let i =0; i < $links.length; i++) {
  const $a = $( $links[i]);
  thumbnailify( $a );
}
