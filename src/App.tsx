// Libraries
import { useContext } from "react";
import { Pulsar } from "@uiball/loaders";

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
import { CharactersContext } from "./context/charactersContext";

function App() {
	const { characters, isLoading, setError, error } =
		useContext(CharactersContext);

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
				{isLoading ? (
					<div>
						<Pulsar size={40} speed={1.75} color="black" />
					</div>
				) : error ? (
					<p>{error}</p>
				) : (
					<ListItem>
						{characters.length >= 1 ? (
							characters?.map(
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
							)
						) : (
							<h1>Nothing to show</h1>
						)}
					</ListItem>
				)}

				<Pagination />
			</Layout>
		</>
	);
}

export default App;
