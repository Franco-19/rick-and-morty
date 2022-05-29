import { Button } from "../styles/Button";

export default function Filter() {
	return (
		<div className="border-gray-200 border-2 rounded-lg w-full text-black flex flex-col items-center p-4 max-w-xl mb-4 gap-2">
			<h3>Filter by location</h3>
			<form className="w-full flex justify-center gap-3" action="">
				<input
					className="text-black border-gray-200 border-2 rounded-md w-4/5 transition-all duration-150 hover:border-gray-300 focus:outline-gray-400"
					type="text"
					name=""
					id=""
				/>
				<button className={Button + "w-1/5"} type="submit">
					Search
				</button>
			</form>
		</div>
	);
}
