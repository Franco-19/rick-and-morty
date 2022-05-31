import axios from "axios";

export const getCharacters = async (page: number, charatersId: string[]) => {
	const response = await axios({
		method: "get",
		url: `${process.env.REACT_APP_API_CHARACTER}${charatersId ? '/' + charatersId.join() : ''}?page=${page}`
	})
	return response
};
