import React, { useState, useEffect, createContext } from "react";
import { getCharacters } from "../services/Character";
import { CharacterResults } from "../interfaces/CharacterInterface";
import { goToTop } from "../helpers/goToTop";
import { AxiosResponse } from "axios";

type CharactersContextInterface = {
	characters: CharacterResults[];
	setCharacters: React.Dispatch<React.SetStateAction<CharacterResults[]>>;
	actualPage: number;
	setActualPage?: React.Dispatch<React.SetStateAction<number>>;
	handleNextPage?: () => void;
	handlePreviousPage?: () => void;
	isLoading: boolean;
	error: string | boolean;
	setError: React.Dispatch<React.SetStateAction<string | boolean>>;
};

export const CharactersContext = createContext<CharactersContextInterface>({
	characters: [],
	setCharacters: () => {
		return [];
	},
	actualPage: 1,
	isLoading: false,
	error: false,
	setError: () => {},
});

export default function CharacterProvider({
	children,
}: {
	children: JSX.Element;
}) {
	const [actualPage, setActualPage] = useState<number>(1);
	const [characters, setCharacters] = useState<Array<CharacterResults>>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		getCharacters(actualPage, []).then(
			({ data }: AxiosResponse<{ results: [CharacterResults] }>) => {
				setCharacters(data.results);
				setIsLoading(false);
			}
		);
	}, [actualPage]);

	const handleNextPage = () => {
		setActualPage(actualPage + 1);
		return goToTop();
	};

	const handlePreviousPage = () => {
		if (actualPage !== 1) {
			setActualPage(actualPage - 1);
			goToTop();
		}
	};

	const contextData: CharactersContextInterface = {
		characters: characters,
		setCharacters: setCharacters,
		actualPage,
		setActualPage,
		handleNextPage,
		handlePreviousPage,
		isLoading,
		error,
		setError,
	};

	return (
		<CharactersContext.Provider value={contextData}>
			{children}
		</CharactersContext.Provider>
	);
}
