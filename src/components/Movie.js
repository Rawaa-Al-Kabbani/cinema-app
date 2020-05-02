import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const movie = this.props.state.find(
      element => element.title === this.props.match.params.movie_title,
    );

    const directors = movie.directors.map(function(item, index) {
      if (index === movie.directors.length - 1) {
        return <span> {item}. </span>;
      } else {
        return <span> {item}, </span>;
      }
    });

    const writers = movie.writers.map(function(item, index) {
      if (index === movie.writers.length - 1) {
        return <span> {item}. </span>;
      } else {
        return <span> {item}, </span>;
      }
    });

    const stars = movie.stars.map(function(item, index) {
      if (index === movie.stars.length - 1) {
        return <span> {item}. </span>;
      } else {
        return <span> {item}, </span>;
      }
    });

    return (
      <div className="movie-detail-container">
        <div className="movie-detail-header">
          <div>
            <img style={{ width: '200px' }} src={movie.src} alt={movie.title} />
          </div>
          <div className="movie-detail-header-title">{movie.title}</div>
        </div>
        <div className="movie-detail-section">
          <div className="movie-detail-title">
            Story:
            <div>{movie.story}</div>
          </div>
          <div className="movie-detail-title">
            Director: <div>{directors}</div>
          </div>
          <div className="movie-detail-title">
            Writers: <div>{writers}</div>
          </div>
          <div className="movie-detail-title">
            Stars:
            <div movie-detail-text>
              <div>{stars}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
