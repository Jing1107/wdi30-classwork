import React, {Component} from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Github Search</h1>
        <Link to="/search">
          <button>Search for a user</button>
        </Link>
        <button onClick={ this._randomUser }>Random user</button>
      </div>

    );
  }
}
