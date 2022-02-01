import React, {useState} from 'react';

type Props = {
    pageSize: number,
    pageCount: number,
    page: number,
    setPage: (page: number) => {}
}

const Paginator: React.FC<Props> = ({pageCount, setPage, page}) => {
    const pageSize = 10
    let h;
    if (page < 10) {
        h = 1
    } else {
        h = Math.trunc(page * 0.1) * pageSize
    }
    const [head, setHead] = useState(h)
    const [portion, setPortion] = useState(Math.trunc(page * 0.1) * pageSize + pageSize)
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
            setPage(head + 10)
    }
    const setPrevPortion = () => {
        setHead(head - 10)
        setPage(head - 10)
    }

    const setFirstPage = () => {
        setPage(1)
        setHead(1)
    }
    const setLastPage = () => {
        setPage(totalPages)
        setHead(totalPages - portion + 1)
    }
    if (portion < totalPages) {
        for (let i = head; i <= portion  - 1; i++) {
            pages.push(<span key={i} onClick={() => {
                setPage(i)
            }} style={(i === page) ? currentPageStyle : {}}>{i}</span>)
        }
    } else {
        for (let i = totalPages - pageSize; i <= totalPages - 1; i++) {
            pages.push(<span key={i} onClick={() => {
                setPage(i)
            }} style={(i === page) ? currentPageStyle : {}}>{i}</span>)
        }
    }


    return (
        <div style={style}>
            {page !== 1 &&
            <span onClick={() => {
                  setPage(page - 1)
                setHead(Math.trunc((page - 2) / pageSize) * pageSize + 1)
            }}>◀</span>
            }
            {(head !== 1) && <span onClick={() => {
                setFirstPage()
            }}>1</span>}
            {(head !== 1) && <span onClick={setPrevPortion}>...</span>}
            {pages}
            {(head < totalPages - pageSize) && <span onClick={setNextPortion}>...</span>}
            {page !== totalPages && <span onClick={() => {
                setLastPage()
            }}>{totalPages}</span>}
            {page === totalPages && <span style={currentPageStyle} onClick={() => {
                setLastPage()
            }}>{totalPages}</span>}
            {page !== totalPages &&
            <span onClick={() => {
                setPage(page + 1)
                setHead(Math.trunc(page / pageSize) * pageSize + 1)
            }}>▶</span>
            }
        </div>
    );
};

export default Paginator;
