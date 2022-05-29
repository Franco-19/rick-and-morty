import Info from "./InfoInterface";

interface LocationResults {
	id: 1;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: string;
}

export default interface Location {
	info: Info;
	results: LocationResults[];
}
