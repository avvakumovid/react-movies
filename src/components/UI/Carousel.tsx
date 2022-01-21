import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";

const Carousel: React.FC = () => {
    const {genre, loading, error} = useTypedSelector(state => state.movie)
    const {fetchGenre} = useAction()

    useEffect(() => {
        fetchGenre()
        console.log(genre)
    }, [])
    if(loading){
        return <h1>Идет загрузка</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
    return (
        <div>
            {genre.map(g => <div key={g.id}>{g.name}</div>)}
        </div>
    );
};

export default Carousel;