import React, {CSSProperties, useState} from 'react';
import {getRaitingColor} from '../../../services/RitingColor/raitingColor';

type props = {
    raiting: number
}

const Raiting: React.FC<props> = ({raiting}) => {
    const [color, setColor] = useState(getRaitingColor(raiting))
    const style: CSSProperties = {
        color: color
    }
    return (<span style={style}>{raiting}</span>
    );
};

export default Raiting;