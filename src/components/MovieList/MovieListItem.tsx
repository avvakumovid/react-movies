import React, {CSSProperties} from 'react';
import {btn, img, margin, style} from "./MovieStyle";
import Button from "../UI/Button/Button";
import {useNavigate} from "react-router-dom";

type Props = {
    src: string,
    title: string,
    overview: string,
    voteAverage: string,
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
    return (
        <div style={style} onClick={() => navigate(`/detail/${_id}`)}>
            <img style={img} alt={title} src={src}/>
            <strong style={margin}>{title}</strong>
            <span style={margin}>{voteAverage}</span>
            <span style={margin}>{releaseDate}</span>
            <Button style={btn} callback={() => console.log(id)}>+</Button>
        </div>
    );
};

export default MovieListItem;