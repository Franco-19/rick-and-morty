import React, { useEffect, useState  } from 'react';
import Info from '../interfaces/InfoInterface';
import { getInfo } from '../services/Info';
import { Button } from '../styles/Button'

type PaginationItemProps = {
    number: number;
}

type PaginationProps = {
    actualPage: number;
    setActualPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({ actualPage, setActualPage }: PaginationProps) {
    const [info, setInfo] = useState<Info>({})

    useEffect(() => {
        getInfo(actualPage).then(data => setInfo(data.info))
    },[actualPage])

    const handleNextPage = () => {
        setActualPage(actualPage + 1)
        goToTop()
    }

    const handlePreviousPage = () => {
        if(actualPage !== 1){
            setActualPage(actualPage - 1)
            goToTop()
        }
    }

    const PaginationItem = ({ number }: PaginationItemProps) => {
        return (
            <button className={'text-slate-700 font-semibold rounded-full hover:bg-yellow-200 w-10 transition-all duration-200'} >
                { number }
            </button>
        )
    }

    const goToTop = () => {
        if(window.scrollY > 400){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

  return (
    <div className='flex gap-3' >
        <button onClick={handlePreviousPage} className={ Button }>{"<"}</button>
        <PaginationItem number={actualPage} />
        <button onClick={handleNextPage} className={ Button }>{">"}</button>
    </div>
  )
}
