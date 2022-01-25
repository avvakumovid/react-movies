import React, {CSSProperties, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import MovieListItem from "./MovieListItem";
import Load from "../UI/Load/Load";
import {block} from "./MovieStyle";
import LoadingOrError from "../UI/LoadingOrError/LoadingOrError";

const MovieList: React.FC = () => {
    let {id} = useParams()
    if (!id) {
        id = '2'
    }
    const {
        movies,
        totalPages,
        itemInPage,
        loading,
        error
    } = useTypedSelector(state => state.movie)
    const {fetchMoviesByGenreId} = useAction()
    const [genreId, setGenreId] = useState(parseInt(id))
    const [page, setPage] = useState(1)
    useEffect(() => {
        fetchMoviesByGenreId(page, genreId)
    }, [page, genreId])

    let style: CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

    return (
        <div style={block}>
            <LoadingOrError loading={loading} error={error}/>
            {movies.map(m => {
                let src = 'https://image.tmdb.org/t/p/w500/' + m.poster_path
                return (
                    <MovieListItem src={src} title={m.title} id={m.id} overview={m.overview} key={m.id}
                                   voteAverage={m.vote_average} releaseDate={m.release_date} _id={m._id}/>
                )
            })}
        </div>
    );
};

export default MovieList;