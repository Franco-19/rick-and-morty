import Info from "./InfoInterface";

export interface CharacterResults {
	id?: number;
	name?: string;
	episode?: string[];
	image?: string;
	location?: {
		name: string;
		url: string;
	};
	origin?: {
		name: string;
		url: string;
	};
	species?: string;
	status?: string;
	url?: string;
}

export default interface Character {
	info: Info;
	results: CharacterResults[];
}