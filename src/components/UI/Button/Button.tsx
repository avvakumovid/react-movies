import React, {CSSProperties} from 'react';

type Props = {
    style: CSSProperties,
    callback: any,
}

const Button: React.FC<Props> = ({style, callback, ...props}) => {
    return (
        <button style={style} onClick={callback}>{props.children}</button>
    );
};

export default Button;