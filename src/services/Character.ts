import axios, { AxiosResponse } from "axios";
import Character from "../interfaces/CharacterInterface";

export const getCharacters = async (page: number, charatersId: string[]) => {

	// const holdCharacters = charatersId.join().slice(0, 20)

	const response = await axios({
		method: "get",
		url: `${process.env.REACT_APP_API_CHARACTER}${charatersId ? '/' + charatersId.join() : ''}?page=${page}`
	})

	// .then(({ data }: AxiosResponse<{ results: [Character] }>) => data.results);

	return response

	// url:
	// 		page >= 1
	// 			? `${process.env.REACT_APP_API_CHARACTER}?page=${page}`
	// 			: process.env.REACT_APP_API_CHARACTER,
};
