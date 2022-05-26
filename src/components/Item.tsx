import axios from "axios";
import { useState, useEffect } from "react";
import { getCharacters } from "../services/Character";
import Character from "../interfaces/CharacterInterface";
import { Card } from "@mui/material";
// import { getCharacters } from '../services/Character'

export default function Item() {
	const [characters, setCharacters] = useState<[Character]>([{}]);

	useEffect(() => {
		getCharacters.then((data) => setCharacters(data));
		console.log(characters);
	}, [characters]);

	return (
		<section  >
			{characters.map(({id}) => (
				<article className="bg-gray-500 rounded-md"  key={id}>Item</article>
			))}
		</section>
	);
}
