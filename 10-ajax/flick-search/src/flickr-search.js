const state = {
  currentPage: 1,
  //requestInProgress: false,
  lastPageReached: false
};

const showImages = function (results) {
  // Nested AKA helper function returns a thumbnail URL for a given photo object.
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // Change 'q' to something else from the docs for different sizes
    ].join('');
  };

  console.log('Results', results);

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images');
  });
  state.requestInProgress = false;
};


const searchFlickr = function (term) {

  console.log(`searching flickr for ${term}`);

  if (/*state.requestInProgress || */state.lastPageReached) return;

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  //state.requestInProgress = true;

  $.getJSON(flickrURL, {
    //Via Flicker docs
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    format: 'json',
    page: state.currentPage++
  }).done(showImages).done(function () {
    state.requestInProgress = false;
    if (results.photos.page >= results.photos.pages) {
      state.lastPageReached;
    }
  });

};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();

    $('#images').empty();
    state.currentPage = 1;
    state.lastPageReached = false;

    const query = $('#query').val();
    searchFlickr(query);
  });

  // Extremely Twitchy
  const throttleSearchFlickr = _.debounce(searchFlickr, 6000, {trailing: false});
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    // You may need to tweak the value below
    if (scrollBottom <= 500) {
      const query = $('#query').val(); // There are better ways to do this.
      searchFlickr(query);
      debouncedSearchFlickr(query);
    }
  });
});
