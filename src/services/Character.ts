import axios, { AxiosResponse } from "axios";
import Character from "../interfaces/CharacterInterface";

export const getCharacters = async (page: number) => {
	const response = await axios({
		method: "get",
		url:
			page >= 1
				? `${process.env.REACT_APP_API_CHARACTER}?page=${page}`
				: process.env.REACT_APP_API_CHARACTER,
	})

	// .then(({ data }: AxiosResponse<{ results: [Character] }>) => data.results);

	return response
};
