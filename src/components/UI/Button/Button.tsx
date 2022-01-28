import React, {CSSProperties} from 'react';

type Props = {
    style: CSSProperties,
    callback: any,
}
const btn: CSSProperties = {
    padding: 5,
    borderRadius: 5,
    border: '1px solid #91c8f6',
    fontSize: 25
}
const Button: React.FC<Props> = ({style, callback, ...props}) => {
    return (
        <button style={{...style, ...btn}} onClick={callback}>{props.children}</button>
    );
};

export default Button;