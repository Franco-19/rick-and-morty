import React, { useState, useEffect, createContext } from "react";
import { getCharacters } from "../services/Character";
import { CharacterResults } from "../interfaces/CharacterInterface";
import { goToTop } from '../helpers/goToTop'
import { AxiosResponse } from "axios";


type CharactersContextInterface = {
    characters: CharacterResults[];
    setCharacters: React.Dispatch<React.SetStateAction<CharacterResults[]>>;
    actualPage: number;
    setActualPage?: React.Dispatch<React.SetStateAction<number>>;
    handleNextPage?: () => void;
    handlePreviousPage?: () => void;
}

export const CharactersContext = createContext<CharactersContextInterface>({characters: [], setCharacters: () => {return []} , actualPage: 1,});

export default function CharacterProvider({ children }: {children: JSX.Element}) {
    const [actualPage, setActualPage] = useState<number>(1);
    
    const [characters, setCharacters] = useState<Array<CharacterResults>>([]);

    useEffect(() => {
		getCharacters(actualPage, [])
            .then(({ data }: AxiosResponse<{ results: [CharacterResults] }>) => setCharacters(data.results))
	}, [actualPage]);

    
    const handleNextPage = () => {
        setActualPage(actualPage + 1)
        return goToTop()
    }

    const handlePreviousPage = () => {
        if(actualPage !== 1){
            setActualPage(actualPage - 1)
            goToTop()
        }
    }

    const contextData: CharactersContextInterface = {
        characters: characters,
        setCharacters: setCharacters,
        actualPage,
        setActualPage,
        handleNextPage,
        handlePreviousPage,
    }

    return (
		<CharactersContext.Provider value={contextData} >
            { children }
        </CharactersContext.Provider>
	);
}