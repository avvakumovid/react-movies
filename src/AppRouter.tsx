import React from 'react';
import {Route, Routes} from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import MovieList from "./components/MovieList/MovieList";
import Detail from "./components/Detail/Detail";

const AppRouter = () => {
    return (
            <Routes>
                <Route path="*" element={ <Carousel/>} />
                <Route path='/genre/:id' element={<MovieList/>}/>
                <Route path='detail/:id' element={<Detail />}/>
            </Routes>
    );
};

export default AppRouter;