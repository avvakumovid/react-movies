import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'

const Carousel: React.FC = () => {
    const {genre, loading, error} = useTypedSelector(state => state.movie)
    const {fetchGenre} = useAction()

    useEffect(() => {
        fetchGenre()
    }, [])

    const items = genre.map(g => <div className='carousel-itme'><img width={407} alt={'img'} src={g.img}/><h2>{g.name}</h2></div>)
    const responsive = {
        0: {items: 1},
        568: {items: 2},
        1024: {items: 3},
    };

    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className='carousel'>
            <AliceCarousel items={items} responsive={responsive}/>
        </div>

    );
};

export default Carousel;