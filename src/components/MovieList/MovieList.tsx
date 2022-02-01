import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAction} from '../../hooks/useAction';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import MovieListItem from './MovieListItem';
import Load from '../UI/Load/Load';
import {block} from './MovieStyle';
import Paginator from '../UI/Paginator/Paginator';

const MovieList: React.FC = () => {
    let {id, page} = useParams()
    if (!id) {
        id = '2';
    }
    const {
        movies,
        totalPages,
        itemInPage,
        loading,
        error,
        currentPage
    } = useTypedSelector(state => state.movie)
    const {fetchMoviesByGenreId, setCurrentPage} = useAction()
    const [genreId, setGenreId] = useState(parseInt(id))
    useEffect(() => {
        fetchMoviesByGenreId(currentPage, genreId)
    }, [currentPage])
    const movieList = useMemo(() =>{
        return  movies.map(m => {
        let src = 'https://image.tmdb.org/t/p/w500/' + m.poster_path
        return (
            <MovieListItem src={src} title={m.title} id={m.id} overview={m.overview} key={m.id}
                           voteAverage={m.vote_average} releaseDate={m.release_date} _id={m._id}/>
        )
    })}, [movies])

    if (loading) {
        return (
            <div style={block}>
                <Load/>
            </div>)
    }
    if (error) {
        return (
            <div style={block}>
                <h1>{error}</h1>
            </div>)
    }


    return (
        <div style={block}>
            <div style={block}>
                {movieList}
            </div>
            <Paginator page={currentPage}
                       setPage={setCurrentPage}
                       pageSize={20} pageCount={totalPages}/>
        </div>

    );
};

export default React.memo(MovieList);