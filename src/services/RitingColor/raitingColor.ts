export const getRaitingColor = (raiting: number) => {
    let color = '';
    if(raiting > 7){
        color = '#abe2ab'
    }else if(raiting < 5){
        color = '#f88'
    }else{
        color = '#fabd64'
    }
    return color;
}