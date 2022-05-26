import axios, { AxiosResponse } from "axios";
import Character from '../interfaces/CharacterInterface'

export const getCharacters = axios({
	method: "get",
	url: "https://rickandmortyapi.com/api/character",
}).then(({data}: AxiosResponse<{results: [Character]}>) => data.results);
