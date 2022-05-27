import axios, { AxiosResponse } from "axios";
import Info from '../interfaces/InfoInterface'

export const getInfo = axios({
	method: "get",
	url: process.env.REACT_APP_API_CHARACTER,
}).then(({data}: AxiosResponse<{info: Info}>) => data);
