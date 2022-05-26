export default interface Character {
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
