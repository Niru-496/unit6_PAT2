export const ButtonInfo = ({ sortBy }) => {
	return (
		<div>
			<button
				className="SortcountryASC"
				onClick={() => sortBy("countryASC")}
			>
				Country👆
			</button>
			<button
				className="SortcountryADC"
				onClick={() => sortBy("countryDSC")}
			>
				{" "}
				Country👇
			</button>
			<button
				className="SortcountryASC"
				onClick={() => sortBy("CityASC")}
			>
				City👆
			</button>
			<button
				className="SortcountryADC"
				onClick={() => sortBy("CityDSC")}
			>
				{" "}
				City👇
			</button>
			<button
				className="SortcountryASC"
				onClick={() => sortBy("popASC")}
			>
				Population👆
			</button>
			<button
				className="SortcountryADC"
				onClick={() => sortBy("popDSC")}
			>
				{" "}
				Population👇
			</button>


		</div>
	);
};
