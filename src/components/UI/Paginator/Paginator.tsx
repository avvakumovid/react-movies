import React, {useState} from 'react';

type Props = {
    pageSize: number,
    pageCount: number
}

const Paginator: React.FC<Props> = ({pageCount}) => {
    const pageSize = 10
    const [head, setHead] = useState(1)
    const [portion, setPortion] = useState(head * pageSize)
    const [currentPage, setCurreantPage] = useState(1)
    // const [totalPages, setTotalpages] = useState(Math.floor(totalItem / pageSize))
    const [totalPages, setTotalpages] = useState(pageCount)
    const pages = []
    let currentPageStyle = {
        color: 'red',
        fontWeight: 500
    }
    const style = {
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'space-around',
        width: '50%',
        color: '#91c8f6'
    }
    if (portion === 0) {
        setPortion(1)
    }
    const setNextPortion = () => {
        setHead(head + 10)
        setCurreantPage(head + 10)
        console.log('currentPage', currentPage)
        console.log('head', head)
    }
    const setPrevPortion = () => {
        setHead(head - 10)
        setCurreantPage(head - 10)
        console.log('currentPage', currentPage)
        console.log('head',head)
    }

    const setFirstPage = () => {
        setCurreantPage(1)
        setHead(1)
    }
    const setLastPage = () => {
        setCurreantPage(totalPages)
        setHead(totalPages - portion + 1)
    }
    if (portion + head < totalPages) {
        for (let i = head; i <= portion + head - 1; i++) {
            pages.push(<span onClick={() => {
                setCurreantPage(i)
            }} style={(i === currentPage) ? currentPageStyle : {}}>{i}</span>)
        }
    } else {
        for (let i = totalPages - pageSize; i <= totalPages - 1; i++) {
            pages.push(<span onClick={() => {
                setCurreantPage(i)
            }} style={(i === currentPage) ? currentPageStyle : {}}>{i}</span>)
        }
    }


    return (
        <div style={style}>
            {currentPage != 1 &&
                <span onClick={() => {
                    setCurreantPage(currentPage - 1)
                    setHead(Math.trunc((currentPage - 2) / pageSize) * pageSize + 1)
                }}>◀</span>
            }
            {(head != 1) && <span onClick={() => {
                setFirstPage()
            }}>1</span>}
            {(head != 1) && <span onClick={setPrevPortion}>...</span>}
            {pages}
            {(head < totalPages - pageSize) && <span onClick={setNextPortion}>...</span>}
            {currentPage != totalPages && <span onClick={() => {
                setLastPage()
            }}>{totalPages}</span>}
            {currentPage === totalPages && <span style={currentPageStyle} onClick={() => {
                setLastPage()
            }}>{totalPages}</span>}
            {currentPage != totalPages &&
            <span onClick={() => {
                setCurreantPage(currentPage + 1)
                setHead(Math.trunc(currentPage / pageSize) * pageSize + 1)
                console.log(head)
            }}>▶</span>
            }
        </div>
    );
};

export default Paginator;
