import React, {CSSProperties, useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useAction} from '../../hooks/useAction';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css'
import {useNavigate} from 'react-router-dom';
import {block} from '../MovieList/MovieStyle';
import Load from '../UI/Load/Load';
import Header from '../Header/Header';

const Carousel: React.FC = () => {
    const {genre, loading, error} = useTypedSelector(state => state.movie)
    const {fetchGenre, setCurrentPage} = useAction()
    const navigate = useNavigate()
    useEffect(() => {
        fetchGenre();
        setCurrentPage(1)
    }, [])

    const items = genre.map(g => <div onClick={() => navigate(`/genre/${g.id}`)} className="carousel-itme"><img
        width={407} alt={'img'} src={g.img}/><h2>{g.name}</h2></div>)
    const responsive = {
        0: {items: 1},
        568: {items: 2},
        1024: {items: 3},
    };
    const padding: CSSProperties = {
        padding: '20px 30px'
    }
    const leftBtn: CSSProperties = {
        position: 'fixed',
        top: 350,
        left: 120,
        fontSize: 35,
        color: '#91c8f6',
    }

    const rightBtn: CSSProperties = {
        position: 'fixed',
        top: 350,
        right: 120,
        fontSize: 35,
        color: '#91c8f6',

    }
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
    return (<div>
            <Header/>
            <div style={{...block, ...padding}}>
                <AliceCarousel items={items} responsive={responsive}
                               renderPrevButton={() => {
                                   return <span style={leftBtn}>⮜</span>
                               }}
                               renderNextButton={() => {
                                   return <span style={rightBtn}>⮞</span>
                               }}
                />
            </div>
        </div>
    );
};

export default Carousel;