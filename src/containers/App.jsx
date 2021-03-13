import React, {useState,useEffect} from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer';

import useInitialState from '../hooks/UseInitialState.js'

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';


const App = () => {
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

    const initialState = useInitialState(API);
    
    return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className="App">

        <Header />
        <Search />

        {initialState.mylist.length > 0 &&
        <Categories title="Mi lista">
            <Carousel>

                <CarouselItem />

            </Carousel>
        </Categories>
        }


        <Categories title="Tendencias">
            <Carousel>
                
                {initialState.trends.map(item =>
                    <CarouselItem key={item.id}{...item}/>
                )}

            </Carousel>
        </Categories>

        <Categories title="Originales de platzi Video">

            <Carousel>
                {initialState.originals.map(item => 
                    
                <CarouselItem key={item.id}{...item}/>
                    )}
            </Carousel>
        </Categories>

        <Footer />

    </div>
    );
}

export default App;