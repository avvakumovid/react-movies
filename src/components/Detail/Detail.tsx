import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAction} from '../../hooks/useAction';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {block} from '../MovieList/MovieStyle';
import Trailer from '../UI/Trailer/Trailer';
import ReactStars from 'react-stars';
import {img, info, padding, style} from './DetailStyle';
import {getRaitingColor} from '../../services/RitingColor/raitingColor';
import Load from '../UI/Load/Load';

const Detail: React.FC = () => {
    let {id} = useParams()
    let {fetchMovieById} = useAction()
    useEffect(() => {
        fetchMovieById(id)
    }, [])
    let {error, loading, movie} = useTypedSelector(state => state.movie)
    // if (loading) {
    //     return (
    //         <div style={block}>
    //             <Load/>
    //         </div>)
    // }
    if (error) {
        return (
            <div style={block}>
                <h1>{error}</h1>
            </div>)
    }
    let color;
    let src;
    if (movie) {
        const raiting = parseInt(movie.vote_average)
        color = getRaitingColor(raiting)
        src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    }
    return (
        <div style={block}>
            {loading
                ? <Load/>
                : <div style={style}>
                    <div style={img}>
                        <img width={300} alt="poster path" src={src}/>
                    </div>
                    <div style={info}>

                        <h1>{movie?.original_title}</h1>
                        <Trailer style={padding} witdh="560" height="315" moviePath={movie?.treilerId}
                                 title="YouTube video player"/>
                        <ReactStars count={10} value={8.8} size={50} edit={false} half={true} color2={color}/>
                        <h3 style={padding} color={color}>Raiting: {movie?.vote_average}</h3>
                        <h3 style={padding}>Relese: {movie?.release_date}</h3>
                        <div style={padding}><strong>Overview:</strong> {movie?.overview}</div>
                    </div>
                </div>}
        </div>
    );

};

export default Detail;