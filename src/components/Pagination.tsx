import React, { useContext, useEffect, useState  } from 'react';
import { CharactersContext } from '../context/charactersContext';
import Info from '../interfaces/InfoInterface';
import { getInfo } from '../services/Info';
import { Button } from '../styles/Button'

type PaginationItemProps = {
    number: number;
}

export default function Pagination() {
    const [info, setInfo] = useState<Info>({})

    const { actualPage, setActualPage, handlePreviousPage, handleNextPage } = useContext(CharactersContext)

    useEffect(() => {
        getInfo(actualPage).then(data => setInfo(data.info))
    },[actualPage])

    const PaginationItem = ({ number }: PaginationItemProps) => {
        return (
            <button className={'text-slate-700 font-semibold rounded-full hover:bg-yellow-200 w-10 transition-all duration-200'} >
                { number }
            </button>
        )
    }



  return (
    <div className='flex gap-3' >
        <button onClick={handlePreviousPage} className={ Button }>{"<"}</button>
        <PaginationItem number={actualPage} />
        <button onClick={handleNextPage} className={ Button }>{">"}</button>
    </div>
  )
}
