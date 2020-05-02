import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const MoviesList = this.props.state.length ? (
      this.props.state.map(movie => {
        return (
          <li className="movie-list-item" key={movie.title}>
            <Link to={{ pathname: '/movie/' + movie.title, query: { id: movie.title } }}>
              <div className="movie">
                <img
                  style={{ width: '200px', height: '250px' }}
                  src={movie.src}
                  alt={movie.title}
                />
                <span className="caption">{movie.title}</span>
              </div>
            </Link>
          </li>
        );
      })
    ) : (
      <p>There is no movies</p>
    );
    return (
      <div className="movie-list-container">
        <ul className="movie-list">{MoviesList}</ul>
      </div>
    );
  }
}

export default Home;
