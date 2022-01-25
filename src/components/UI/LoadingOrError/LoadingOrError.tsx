import React from 'react';
import {block} from "../../MovieList/MovieStyle";
import Load from "../Load/Load";

type props = {
    loading: boolean,
    error: string | null
}

const LoadingOrError:React.FC<props> = ({loading, error}) => {
    if (loading) {
        return (
            <div style={block}>
                <Load/>
            </div>)
    }
    if (error) {
        return (
            <div style={block}>
                <h1>{error}</h1>
            </div>)
    }
    return <></>
};

export default LoadingOrError;