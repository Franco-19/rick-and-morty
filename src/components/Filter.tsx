// Libraries
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { Ring } from "@uiball/loaders";

// Context
import { CharactersContext } from "../context/charactersContext";

// Services
import { getCharacters } from "../services/Character";
import { getLocationByQuery } from "../services/LocationByQuery";

// Interfaces
import { LocationResults } from "../interfaces/LocationInterface";
import { CharacterResults } from "../interfaces/CharacterInterface";

// Styles
import { Button } from "../styles/Button";

export default function Filter() {
	const [searchTimeout, setSearchTimeout] = useState<number>(0);
	const [searchedValues, setSearchedValues] = useState<Array<LocationResults>>([
		{ name: "loading" },
	]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	// const [error, setError] = useState<string | boolean>(false);

	const { actualPage, setCharacters, setError } = useContext(CharactersContext);

	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: {
			searchValue: "",
		},
		onSubmit: ({ searchValue }) => {
			setIsLoading(true);
			getLocationByQuery(actualPage, searchValue)
				.then(({ results }) => {
					setSearchedValues(results);
				})
				.catch((error) => {
					console.error(error.response.data.error);
					setError(error.response.data.error);
					setIsLoading(false);
				});
		},
	});

	const updateCharaterValues = (charactersId: string[]) => {
		getCharacters(actualPage, charactersId).then(
			({ data }: AxiosResponse<CharacterResults[]>) => setCharacters(data)
		);
	};

	const mapResidentsIds = (charactersId: string[]) => {
		// console.log(searchedValues)
		return searchedValues.map((location) => {
			return location.residents?.map((resident) => {
				// console.log(resident)
				let holdResidentIdValue = resident.replace(
					"https://rickandmortyapi.com/api/character/",
					""
				);
				return charactersId.push(holdResidentIdValue);
			});
		});
		// console.log(charactersIdSearched)
	};

	let charactersId: string[] = [];
	useEffect(() => {
		mapResidentsIds(charactersId);
		if (charactersId.length >= 1) {
			// console.log(charactersId.splice(0, 20))
			// setCharactersIdSearched(charactersId)
			// console.log(searchedValues)
			// console.log(charactersIdSearched)

			updateCharaterValues(charactersId.splice(0, 20));

			// console.log(characters)
		}

		setIsLoading(false);

		return () => {
			charactersId = [];
		};
	}, [setSearchedValues, searchedValues]);

	const validateLengthField: React.ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		handleChange(event);
		// if (searchTimeout !== 0) {
		// }
		clearTimeout(searchTimeout);
		if (values.searchValue.length >= 2 /* && !isLoading && !error */) {
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
				<button
					className={Button + "w-1/5 flex justify-center"}
					type="submit"
					disabled={isLoading}>
					{isLoading ? (
						<Ring size={25} lineWeight={5} speed={2} color="black" />
					) : (
						"Search"
					)}
				</button>
			</form>
		</div>
	);
}
