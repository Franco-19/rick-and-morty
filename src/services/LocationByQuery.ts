import axios, { AxiosResponse } from "axios";
import Character from "../interfaces/CharacterInterface";

export const getLocationByQuery = (page: number, location: string) => {
	return axios({
		method: "get",
		url: `
            ${process.env.REACT_APP_API_LOCATION}
            ${location != "" ? `?name=${location}` : ""}
            ${page >= 1 ? `&page=${page}` : ""}
        
        `,
	}).then(({ data }: AxiosResponse<{ results: [Character] }>) => data.results);
};
