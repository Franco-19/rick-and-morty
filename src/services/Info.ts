import axios, { AxiosResponse } from "axios";
import Info from "../interfaces/InfoInterface";

export const getInfo = (page: number) => {
	return axios({
		method: "get",
		url:
			page >= 1
				? `${process.env.REACT_APP_API_CHARACTER}?page=${page}`
				: process.env.REACT_APP_API_CHARACTER,
	}).then(({ data }: AxiosResponse<{ info: Info }>) => data);
};
