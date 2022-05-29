// Libraries
import { useFormik } from "formik";
import { useState } from "react";

// Styles
import { Button } from "../styles/Button";

export default function Filter() {
    const [searchTimeout, setSearchTimeout] = useState<number>(0);

	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: {
			searchValue: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

    const validateLengthField: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        handleChange(event);
        if (searchTimeout !== 0) {
            clearTimeout(searchTimeout);
        }
        if (searchTimeout >= 2 /* && !isLoading && !error */) {
            setSearchTimeout(
                setTimeout((event) => {
                    handleSubmit(event);
                }, 1000)
            );
        }
    };

	return (
		<div className="border-gray-200 border-2 rounded-lg w-full text-black flex flex-col items-center p-4 max-w-xl mb-4 gap-2">
			<h3>Filter by location</h3>
			<form
				className="w-full flex justify-center gap-2"
				onSubmit={handleSubmit}>
				<input
					className="text-black border-gray-200 border-2 rounded-md w-4/5 transition-all duration-150 hover:border-gray-300 focus:outline-gray-400 indent-1"
					type="text"
					id="searchValue"
					name="searchValue"
					value={values.searchValue}
					onChange={validateLengthField}
				/>
				<button className={Button + "w-1/5"} type="submit">
					Search
				</button>
			</form>
		</div>
	);
}
