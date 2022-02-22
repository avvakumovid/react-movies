import React, {useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useAction} from '../../hooks/useAction';
import WatchListItem from './WatchListItem';
import style from './WatchList.module.css'

const WatchList: React.FC = () => {
    const {currentUser, token, watchlist} = useTypedSelector(state => state.user)
    const {fetchWatchList, deleteFromWatchList} = useAction()
    useEffect(() => {
        fetchWatchList(token)
    }, [])
    const watchListItems = watchlist.map(m => <WatchListItem token={token} _id={m._id} release_date={m.release_date}
                                                             title={m.title} key={m.id} overview={m.overview}
                                                             vote_average={m.vote_average}
                                                             poster_path={m.poster_path}/>)
    if (!watchListItems.length) {
        return (
            <div className={style.empty}>
                <h1>Список фильмов пуст</h1>
            </div>
        )
    }
    return (
        <div>
            {watchListItems}
        </div>
    );
};

export default WatchList;