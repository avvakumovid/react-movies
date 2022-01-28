import {CSSProperties} from 'react';

export const style = {
    display: 'flex',
    padding: 40,

}

const backGround = {
    background: 'rgb(35,42,49,0.8)',
    padding: 40,

}

export const img = {
    width: '30%',
    ...backGround


}
export const info = {
    width: '70%',
    ...backGround

}
export const padding: CSSProperties = {
    paddingTop: 20
}