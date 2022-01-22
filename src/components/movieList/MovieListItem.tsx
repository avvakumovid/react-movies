import React, {CSSProperties} from 'react';
import {btn, img, margin, style} from "./MovieStyle";

type Props = {
    src: string,
    title: string,
    overview: string,
    voteAverage: string,
    releaseDate: string,
    id: number
}

const MovieListItem: React.FC<Props> = (
    {
        src,
        title,
        overview,
        voteAverage,
        releaseDate,
        id,
        ...props
    }) => {

    return (
        <div style={style}>
            <img style={img} alt={title} src={src}/>
            <strong style={margin}>{title}</strong>
            <span style={margin}>{voteAverage}</span>
            <span style={margin}>{releaseDate}</span>
            <button style={btn} onClick={() => console.log(id)}>+</button>
        </div>
    );
};

export default MovieListItem;