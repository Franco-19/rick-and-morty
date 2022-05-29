type ItemProps = {
	image?: string;
	name?: string;
	status?: string;
	species?: string;
	origin?: {
		name: string;
		url: string;
	};
	location?: {
		name: string;
		url: string;
	};
	handleStatusColor: (status?: string) => "text-green-300" | "text-red-400" | "text-white";
}

export default function Item({image, name, status, species, origin, location, handleStatusColor}: ItemProps) {
	return (
		<article className="bg-gray-500 rounded-md w-96">
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
	);
}
