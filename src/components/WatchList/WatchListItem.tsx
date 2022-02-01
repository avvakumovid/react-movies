import React from 'react';
import style from './WatchList.module.css'
import {useNavigate} from 'react-router-dom';
import trash from '../../img/icon/trash.png'
import {Api} from '../../API/api';
import {useTypedSelector} from '../../hooks/useTypedSelector';

type props = {
    title: string,
    overview: string,
    poster_path: string,
    vote_average: string,
    release_date: string,
    _id: string
}


const WatchListItem: React.FC<props> = ({title, overview, poster_path, vote_average, release_date, _id}) => {
    const navigate = useNavigate()
    const {currentUser} = useTypedSelector(state => state.user)
    const userId = currentUser.id
    return (
        <div className={style.item} onClick={() => navigate(`/detail/${_id}`)}>
            <img className={style.img} alt="poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
            <div className={style.title}>
                <h2>{title}</h2>
                <span>{overview}</span>
            </div>
            <span>{vote_average}</span>
            <span>{release_date}</span>
            <button className={style.btn} ><img className={style.icon} alt='bin' src={trash}/></button>
        </div>
    );
};

export default WatchListItem;