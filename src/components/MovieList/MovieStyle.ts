import {CSSProperties} from "react";

export const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    background: 'rgb(35,42,49,0.8)',
    borderRadius: 5,
    alignContent: 'space-around',
    color: '#91c8f6',
    fontSize: 17,
    justifyContent: 'space-between',
    width: 200,
    border: '1px solid #91c8f6'
}
export const margin: CSSProperties = {
    marginTop: 10,
    marginLeft: 10
}
export const btn: CSSProperties = {
    padding: 5,
    width: 40,
    borderRadius: 5,
    alignSelf: 'flex-end',
    margin: 10,
    background: 'rgb(35,42,49,0.1)',
    border: '1px solid #91c8f6',
    color: '#91c8f6',
    fontSize: 25
}

export const img: CSSProperties = {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 300
}

export const block: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}