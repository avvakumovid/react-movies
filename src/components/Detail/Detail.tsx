import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Detail:React.FC = () => {
    let {id} = useParams()
    let {fetchMovieById} = useAction()
    useEffect(() => {
        fetchMovieById(id)
    }, [id])
    let {error, loading, movie} = useTypedSelector(state => state.movie)
    return (
        <div>
            {movie.title}
        </div>
    );
};

export default Detail;