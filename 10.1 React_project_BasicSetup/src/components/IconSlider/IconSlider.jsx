import React from 'react';
import './IconSlider.scss';
import PropTypes from 'prop-types';
import movie1 from '../../assets/1.jpeg';
import movie2 from '../../assets/2.jpeg';
import movie3 from '../../assets/3.jpeg';
import movie4 from '../../assets/4.jpeg';
import movie5 from '../../assets/5.jpeg';
import movie6 from '../../assets/6.jpeg';
import movie7 from '../../assets/7.jpeg';
import movie8 from '../../assets/8.jpeg';
import movie9 from '../../assets/9.jpeg';
import movie10 from '../../assets/10.jpeg';
import movie11 from '../../assets/11.jpeg';
import movie12 from '../../assets/12.jpeg';
import movie13 from '../../assets/13.jpeg';
import movie14 from '../../assets/14.jpeg';
import movie15 from '../../assets/15.jpeg';

const movies = [
  movie1, movie2, movie3, movie4, movie5,
  movie6, movie7, movie8, movie9, movie10,
  movie11, movie12, movie13, movie14, movie15,
];

function IconSlider({ title }) {
  const randomMovie = (items) => {
    const movList = [];
    for (let i = 0; i < items; i += 1) {
      const counter = Math.round(Math.random() * 15);
      const key = Date.now() * Math.random();
      const mov = (
        <img
          key={key}
          src={movies[counter]}
          alt=""
        />
      );
      movList.push(mov);
    }
    return movList;
  };

  return (
    <div className="list-container">
      <div className="list-title">{title}</div>
      <div className="movies-container">{randomMovie(5)}</div>
    </div>
  );
}

IconSlider.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IconSlider;
