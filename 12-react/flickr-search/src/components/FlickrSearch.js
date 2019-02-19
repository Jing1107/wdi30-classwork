import React, { Component } from 'react';
import jsonp from 'jsonp-es6';// IRL: we' use Axios for regular AJAX (see tmr)

class FlickrSearch extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        // 'http://fillmurray.com/400/400',
        // 'http://fillmurray.com/401/400',
        // 'http://fillmurray.com/400/401',
        // 'http://fillmurray.com/399/400',
      ]
    };
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(q) {
    console.log('Searching Flickr for', q);
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: q,
      format: 'json'
    };
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

    // This actually initiates the request to Flick for images matching the term `q`.
    // In real life we'd use `axios` or `fetch` to make this request.
    jsonp(flickrURL, flickrParams, {callback: 'jsoncallback'}).then((results) => {
      const images = results.photos.photo.map(generateURL);
      this.setState({images}); // {"images": images}
    });
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={ this.fetchImages }/>
        <Gallery images={ this.state.images}/>
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: ''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e) {
    this.setState({query: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    // call the
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Butterfly" required onInput={ this._handleInput }/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

class Gallery extends Component {

  render() {
    return (
      <div>
        { this.props.images.map( (url) => <Image url={url} /> ) }
      </div>
    );
  }
}

//<Image url=something>

// Functiional component -- good when you don't need state
function Image (props) {
  return (
    <img src={ props.url } width="250" height="250" />
  )
}
export default FlickrSearch;
