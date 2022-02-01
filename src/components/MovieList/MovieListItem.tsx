import React, {CSSProperties} from 'react';
import {btn, img, margin, style} from './MovieStyle';
import Button from '../UI/Button/Button';
import {useNavigate} from 'react-router-dom';
import bookmark from '../../img/icon/bookmark.png'
import {getRaitingColor} from '../../services/RitingColor/raitingColor';
import {getFormattedDate} from '../../services/DateFormatter/dateFormattet';
import {isDisabled} from '@testing-library/user-event/dist/utils';
import {Api} from '../../API/api';
import {useTypedSelector} from '../../hooks/useTypedSelector';

type Props = {
    src: string,
    title: string,
    overview: string,
    voteAverage: number,
    releaseDate: string,
    id: number,
    _id: string
}

const MovieListItem: React.FC<Props> = (
    {
        src,
        title,
        overview,
        voteAverage,
        releaseDate,
        id,
        _id,
        ...props
    }) => {
    const navigate = useNavigate()
    const voteColor = {
        color: getRaitingColor(voteAverage)
    }
    const formatedReleaseDate = getFormattedDate(releaseDate)
    const {currentUser} = useTypedSelector(state => state.user)
    const userId = currentUser?.id
    return (
        <div style={style} onClick={() => navigate(`/detail/${_id}`)}>
            <img style={img} alt={title} src={src}/>
            <div style={{height: 60, display: 'flex', alignItems: 'center'}}><strong style={margin}>{title}</strong>
            </div>
            <span style={{...margin, ...voteColor}}>{voteAverage}</span>
            <span style={margin}>{formatedReleaseDate}</span>
            <button style={btn} key={id} onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                Api.AddMovieToWatchList(userId, _id)
            }}><img alt="bookmark" src={bookmark}/></button>
        </div>
    );
};

export default MovieListItem;