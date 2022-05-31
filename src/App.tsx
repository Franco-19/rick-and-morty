// Libraries
import { useContext } from "react";

// Components
import Header from "./components/Header";
import Item from "./components/Item";
import Layout from "./components/Layout";
import ListItem from "./components/ListItem";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";

// Interfaces
import { CharacterResults } from "./interfaces/CharacterInterface";

// import CharacterProvider from "./context/charactersContext";
import { CharactersContext } from './context/charactersContext';

function App() {
	const { characters } = useContext(CharactersContext);

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
				<Filter />
				<Pagination />
				<ListItem>
					{characters?.map(
						({
							id,
							image,
							name,
							status,
							species,
							origin,
							location,
						}: CharacterResults) => (
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
