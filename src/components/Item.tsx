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

	const handleStatusColor = (status: string | undefined) => {
		if (status === "Alive") {
			return "text-green-300";
		}
		if (status === "Dead") {
			return "text-red-400";
		}
		return "text-white";
	};

	return (
		<>
			{characters.map(
				({ id, image, name, status, species, origin, location }) => (
					<article className="bg-gray-500 rounded-md w-96" key={id}>
						<img
							className="rounded-t-md w-full object-cover h-72"
							src={image}
							alt={name}
						/>
						<div className="p-4">
							<div className="flex justify-between items-center">
								<h2 className="text-white font-quicksand font-bold text-xl uppercase">
									{name}
								</h2>
								<p className={handleStatusColor(status)}>{status}</p>
							</div>
							<p>{species}</p>
							<p className="hover:text-yellow-200 transition-all duration-200">
								<span className="underline">Origin</span>: {origin?.name}
							</p>
							<p className="hover:text-yellow-200 transition-all duration-200">
								<span className="underline">Location</span>: {location?.name}
							</p>
						</div>
					</article>
				)
			)}
		</>
	);
}
