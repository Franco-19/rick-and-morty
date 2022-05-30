import { createContext } from "react";

interface CharactersContextInterface {
    name: string;
}

const CharactersContext = createContext<CharactersContextInterface | null>(null);

const ContextTestData = {
    name: 'Franco Test'
}

export default function CharacterProvider({ children }: {children: JSX.Element[]}) {
	return (
		<CharactersContext.Provider value={ContextTestData} >
            { children }
        </CharactersContext.Provider>
	);
}
