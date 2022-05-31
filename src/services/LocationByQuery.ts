import axios, { AxiosResponse } from "axios";
import Location from "../interfaces/LocationInterface";

export const getLocationByQuery = (page: number, location: string) => {
	return axios({
		method: "get",
		url: `${process.env.REACT_APP_API_LOCATION}?name=${location}${page > 1 ? `&page=${page}` : ''}
        `,
	}).then(({ data }: AxiosResponse<Location>) => data);
    ;
    // .then(({ data }: AxiosResponse<Location>) => data);
};
