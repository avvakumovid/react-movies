import React, {CSSProperties} from 'react';

type props = {
    witdh: string,
    height: string,
    moviePath: string,
    title: string,
    style: CSSProperties

}

const Trailer: React.FC<props> = ({moviePath, height, witdh, title, style}) => {
    if(moviePath){
        const src = `https://www.youtube.com/embed/${moviePath}`
        return (<iframe style={style} width={witdh} height={height} src={src}
                        title={title} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>);
    }
    return <></>

};

export default Trailer;