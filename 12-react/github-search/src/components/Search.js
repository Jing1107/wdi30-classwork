import React, {Component} from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {username: 'coldhead'};
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const username = this.state.username;
    this.props.history.push(`/details/${username}`);
    // navigate to /details/username
  }


  render() {
    return (
      <div>
        <h2>Search Github by username</h2>
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange} value={ this.state.username} />
          <button></button>
        </form>
      </div>
    )
  }
}
