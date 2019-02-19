console.log("99999");
/*Step by Step:
Create an array of every link on the page using document.querySelectorAll
(cssSelector)

Iterate through the array. In each iteration of the loop:

Find the current href using element.getAttribute(name), and store into a variable
Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
Create an IMG element using document.createElement(tagName)
Set the "src" of the IMG element using element.setAttribute(name, value)
Append the IMG to the link using element.appendChild(element)
Quick Tip: If you need a refresher on the DOM API, check out slides 1-12 from
the DOM Review here*/

/*
const link = document.querySelectorAl('ul a')

for (let i = 0; i < link.length; i++) {
  //console.log(link[i]);
  //find the curen fref suing element
  const href = link[i].getAttribute('href');
  //console.log('href');

  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const thumbnail = document.createElement('img');//Detached DOM Node
  thumbnail.setAttribute('src', thumbnailURL);

  // appendChild
  links[i].appendChild(thumbnail);
}*/

//const link = document.querySelectorAl('ul a')
// for (let i = 0; i < videos.length; i++) {
//   const url = videos[i].getAttribute("href");
//   const thumbnail = youtube.generateThumbnailUrl(url);
//   const image = document.createElement("img");
//   image.setAttribute("src", thumbnail);
//   videos[i].appendChild(image);
// }

/*const $links = $('ul a')

for (let i = 0; i < $links.length; i++) {
// convert single binilla DOM back into a jquery-powered object.
  const $link = $( $links[i] );

  //console.log("$links[i],$link");

  const href = $link.attr("href");//getter

  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const thumbnail = $('<img>');//Detached DOM node

  $thumbnail.attr("src", thumbnailURL);//setter

  $link.prepend($thumbnail);
}*/

$('ul a').each(function (index,element) {
  const href = $(element).attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  $('<img>').attr('src', thumbnailURL).prependTo(element);
});
