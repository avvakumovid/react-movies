import React, {CSSProperties, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAction} from '../../hooks/useAction';
import {block} from '../MovieList/MovieStyle';
import Trailer from '../UI/Trailer/Trailer';
import ReactStars from 'react-stars';
import {img, info, padding, style} from './DetailStyle';
import Load from '../UI/Load/Load';
import {getRaitingColor} from '../../services/RitingColor/raitingColor';
import {fetchMovieById, resetMovie} from '../../store/action-creators/movieActionCreator';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const Detail: React.FC = () => {
    let {id} = useParams()
    let {fetchMovieById, resetMovie} = useAction()
    useEffect(() => {
        fetchMovieById(id)
        return () => {
            resetMovie()
        }
    }, [])
    let {loading, error, movie} = useTypedSelector(state => state.movie)
    let [color, setColor] = useState('')
    let [src, setSrc] = useState('')
    const backgroundImage: CSSProperties = {
        backgroundImage: `url(\'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}\')`,
        backgroundSize: 'cover',
        display: 'block',
        filter: 'blur(10px)',
        opacity: '0.7',
        // webkitFilter: 'blur(5px)',
        height: '800px',
        left: 0,
        position: 'fixed',
        right: 0,
        zIndex: 1,
    }
    const content: CSSProperties = {
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        padding: 40
    }
    useEffect(() => {
        if (movie) {
            setColor(getRaitingColor(movie.vote_average))
            setSrc(`https://image.tmdb.org/t/p/w500/${movie.poster_path}`)
        }
    }, [movie])

    if (error) {
        return (
            <div style={block}>
                <h1>{error}</h1>
            </div>)
    }
    return (
        <div style={block}>
            {(loading || !movie)
                ? <Load/>
                : <div >
                    <div style={backgroundImage}></div>
                    <div style={content}>
                        <div style={img}>
                            <img width={300} alt="poster path" src={src}/>
                        </div>
                        <div style={info}>
                            <h1>{movie?.title}</h1>
                            <Trailer style={padding} witdh="560" height="315" moviePath={movie.treilerId}
                                     title="YouTube video player"/>
                            <ReactStars count={10} value={movie.vote_average} size={50} edit={false} half={true}
                                        color2={color}/>
                            <h3 style={{...padding, color}} color={color}>Raiting: {movie.vote_average}</h3>
                            <h3 style={padding}>Relese: {movie.release_date}</h3>
                            <div style={padding}><strong>Overview:</strong> {movie.overview}</div>
                        </div>
                    </div>
                </div>}
        </div>
    );

};

export default Detail;