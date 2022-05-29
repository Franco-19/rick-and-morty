import { useEffect, useState } from "react";
import { getCharacters } from "./services/Character";

// Components
import Header from "./components/Header";
import Item from "./components/Item";
import Layout from "./components/Layout";
import ListItem from "./components/ListItem";
import Pagination from "./components/Pagination";
import Character from "./interfaces/CharacterInterface";

function App() {
	const [characters, setCharacters] = useState<[Character]>([{}]);

	useEffect(() => {
		getCharacters.then((data) => setCharacters(data));
		console.log(characters);
	}, [characters]);

	const handleStatusColor = (status?: string) => {
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
			<Header />
			<Layout>
				<ListItem>
					{characters.map(
						({ id, image, name, status, species, origin, location }: Character) => (
							<Item
								key={id}
								image={image}
								name={name}
								status={status}
								species={species}
								origin={origin}
								location={location}
								handleStatusColor={handleStatusColor}
							/>
						)
					)}
				</ListItem>
				<Pagination />
			</Layout>
		</>
	);
}

export default App;
