import React from 'react';
import {Route, Routes} from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import MovieList from "./movieList/MovieList";

const AppRouter = () => {
    return (
            <Routes>
                <Route  path="*" element={ <Carousel/>} />
                <Route path='/genre/:id' element={<MovieList/>}/>
            </Routes>
    );
};

export default AppRouter;