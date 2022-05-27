import axios, { AxiosResponse } from "axios";
import Character from '../interfaces/CharacterInterface'

export const getCharacters = axios({
	method: "get",
	url: process.env.REACT_APP_API_CHARACTER,
}).then(({data}: AxiosResponse<{results: [Character]}>) => data.results);
