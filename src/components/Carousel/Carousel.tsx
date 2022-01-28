import React, {useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useAction} from '../../hooks/useAction';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'
import {useNavigate} from 'react-router-dom';
import {block} from '../MovieList/MovieStyle';
import LoadingOrError from '../UI/LoadingOrError/LoadingOrError';
import Load from '../UI/Load/Load';

const Carousel: React.FC = () => {
    const {genre, loading, error} = useTypedSelector(state => state.movie)
    const {fetchGenre} = useAction()
    const navigate = useNavigate()
    useEffect(() => {
        fetchGenre()
    }, [])

    const items = genre.map(g => <div onClick={() => navigate(`/genre/${g.id}`)} className="carousel-itme"><img
        width={407} alt={'img'} src={g.img}/><h2>{g.name}</h2></div>)
    const responsive = {
        0: {items: 1},
        568: {items: 2},
        1024: {items: 3},
    };

    if (loading) {
        return (
            <div style={block}>
                <Load/>
            </div>
        )
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (

        <div className="carousel">
            <LoadingOrError loading={loading} error={error}/>
            <AliceCarousel items={items} responsive={responsive}/>
        </div>

    );
};

export default Carousel;