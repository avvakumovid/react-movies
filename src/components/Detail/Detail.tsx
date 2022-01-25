import React, {CSSProperties, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {block} from "../MovieList/MovieStyle";
import Load from "../UI/Load/Load";
import Trailer from "../UI/Trailer/Trailer";
import ReactStars from 'react-stars';
import LoadingOrError from "../UI/LoadingOrError/LoadingOrError";



const Detail: React.FC = () => {
    let {id} = useParams()
    let {fetchMovieById} = useAction()
    useEffect(() => {
        fetchMovieById(id)
    }, [id])
    let {error, loading, movie} = useTypedSelector(state => state.movie)

    let style = {
        display: 'flex',
        padding: 40
    }

    let img = {
        width: '30%',

    }
    let ingo = {
        width: '70%',

    }



    const padding:CSSProperties = {
        paddingTop: 20
    }
    if (movie) {
        let color = '';
        const raiting = parseInt(movie.vote_average)
        if(raiting > 7){
            color = '#abe2ab'
        }else if(raiting < 5){
            color = '#f88'
        }else{
            color = '#fabd64'
        }

        const src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        return (
            <div style={style}>
                <div style={img}>
                    <img width={300} alt='poster path' src={src}/>
                </div>
                <div style={ingo}>
                    <h1>{movie.original_title}</h1>
                    <Trailer style={padding} witdh='560' height="315" moviePath="JfVOs4VSpmA" title="YouTube video player"/>
                    <ReactStars  count={10} value={8.8} size={50} edit={false} half={true} color2={color}/>
                    <h3 style={padding} color={color}>Raiting: {movie.vote_average}</h3>
                    <h3 style={padding}>Relese: {movie.release_date}</h3>
                    <div style={padding}><strong>Overview:</strong> {movie.overview}</div>
                </div>
            </div>
        );
    }

    return <div style={block}>
        <LoadingOrError loading={loading} error={error}/>
    </div>

};

export default Detail;