import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Header from '../components/Header';

import useInitialState from "../hooks/UseInitialState.js";

import "../assets/styles/App.scss";

//const API = 'http://localhost:3000/initialState';

const Home = ({ mylist, trends, originals }) => {
  /*
   const [ videos, setVideos ] = useState({
    mylist:[],
    trends: [],
    originals: []
});

   useEffect(() =>{
       fetch('http://localhost:3000/initialState')
    .then(response => response.json())
    .then(data => setVideos(data))
    
    }, []);
    
*/

  //const initialState = useInitialState(API);

  //return initialState.length === 0 ? <h1>Loading...</h1> : (
  return (
    <>
    <Header/>
      <Search isHome/>

      {mylist.length > 0 && (
        <Categories title="Mi lista">
                      <Carousel>
						{mylist.map((item) => (
							<CarouselItem key={item.id} {...item} />
						))}
					</Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem 
                key={item.id} 
                {...item} 
                isList    
            />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
