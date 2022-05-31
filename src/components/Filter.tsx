// Libraries
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../context/charactersContext";
import { getLocationByQuery } from "../services/LocationByQuery";

import Location, { LocationResults } from "../interfaces/LocationInterface";
import { AxiosResponse } from "axios";


// Styles
import { Button } from "../styles/Button";
import { getCharacters } from "../services/Character";
import { CharacterResults } from "../interfaces/CharacterInterface";
// import { CharacterResults } from "../interfaces/CharacterInterface";
// import Location from "../interfaces/LocationInterface";

export default function Filter() {
    const [searchTimeout, setSearchTimeout] = useState<number>(0);
	const [searchedValues, setSearchedValues] = useState<Array<LocationResults>>([{name: 'loading'}]);
	const [charactersIdSearched, setCharactersIdSearched] = useState<Array<string>>([])
	const { characters, actualPage, setCharacters } = useContext(CharactersContext)
	

	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: {
			searchValue: "",
		},
		onSubmit: ({ searchValue }) => {
			// setSearchedValues([])
			// console.log(searchValue);
			getLocationByQuery(actualPage, searchValue).then(({ results }) => {setSearchedValues(results)})
				// .then() => {
				// 	setSearchedValues(data.results)
				// 	mapResidentsIds()
				// 	// updateCharaterValues()
				// });

			// characters.map((character) => {

			// 	console.log(character)
			// 	// console.log(character.location?.name)
			// 	console.info(character.location?.name.match(searchValue))

			// 	if(character.location?.name.match(searchValue)){
			// 		console.warn('match')
			// 		setSearchedValues((prevArray) => [...prevArray, character])
			// 	}
			// })

			// console.log(searchedValues)
		},
	});

	// useEffect(() => {


	// 	// return setCharactersIdSearched([])
	// }, [setSearchedValues, searchedValues])
	
	const updateCharaterValues = (charactersId: string[]) => {
		getCharacters(actualPage, charactersId).then(({ data }: AxiosResponse<CharacterResults[]>) => setCharacters(data))
	}

	const mapResidentsIds = (charactersId: string[]) => {

		// let charactersId: string[] = []

		// console.log(searchedValues)
		return searchedValues.map(location => {
			return location.residents?.map((resident) => {
				// console.log(resident)
				let holdResidentIdValue = resident.replace('https://rickandmortyapi.com/api/character/', '')
				return charactersId.push(holdResidentIdValue)
			})
		});
		// console.log(charactersIdSearched)
	}
	
	let charactersId: string[] = []
	useEffect(() => {
		mapResidentsIds(charactersId)		
		if(charactersId.length >= 1) {
			console.log(charactersId.splice(0, 20))
			// setCharactersIdSearched(charactersId)
			console.log(searchedValues)
			// console.log(charactersIdSearched)
	
			updateCharaterValues(charactersId.splice(0, 20))
	
			console.log(characters)
		}


		return () => {
			charactersId = []
		}
	}, [setSearchedValues, searchedValues])

	
	
		

    const validateLengthField: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        handleChange(event);
        if (searchTimeout !== 0) {
            clearTimeout(searchTimeout);
        }
        if (searchTimeout >= 2 /* && !isLoading && !error */) {
            setSearchTimeout(
                setTimeout((event) => {
                    handleSubmit(event);
                }, 1000)
            );
        }
    };

	return (
		<div className="border-gray-200 border-2 rounded-lg w-full text-black flex flex-col items-center p-4 max-w-xl mb-4 gap-2">
			<h3>Filter by location</h3>
			<form
				className="w-full flex justify-center gap-2"
				onSubmit={handleSubmit}>
				<input
					className="text-black border-gray-200 border-2 rounded-md w-4/5 transition-all duration-150 hover:border-gray-300 focus:outline-gray-400 indent-1"
					type="text"
					id="searchValue"
					name="searchValue"
					value={values.searchValue}
					onChange={validateLengthField}
				/>
				<button className={Button + "w-1/5"} type="submit">
					Search
				</button>
			</form>
		</div>
	);
}
