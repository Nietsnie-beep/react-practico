import React from "react";
import { connect } from "react-redux";
import { setFavorite, deleteFavorites } from "../actions";

import removeIcon from '../assets/static/remove-icon.png'
import { Link } from 'react-router-dom';
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";

import propTypes from "prop-types";

const CarouselItem = (props) => {
  const{id, cover, title, year, contentRating, duration, isList} = props;
  
  const handleSetFavorite = () => {
    props.setFavorite({
       id, cover, title, year, contentRating, duration
      })
  }

  const handleDeleteFavorite = (itemId) =>{
    props.deleteFavorites(itemId)
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
         <Link to={`/player/${id}`}>
         
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
         </Link>

          {isList ?


          <img
          className="carousel-item__details--img"
          src={plusIcon}
          alt="Plus Icon"
          onClick={handleSetFavorite}
        />
          
         :
          <img src={removeIcon} 
          className="carousel-item__details--img"
          alt="remove icon"
          onClick={() => handleDeleteFavorite(id)}
          /> 
          }

        </div>

        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        {`${year} ${contentRating} ${duration}`}
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: propTypes.number,
  cover: propTypes.string,
  title: propTypes.string,
  year: propTypes.number,
  contentRating: propTypes.string,
  duration: propTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorites,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
