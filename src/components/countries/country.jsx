import axios from "axios";
import { useEffect, useState } from "react";
import { ButtonInfo } from "../buttons/buttons";

export const CountriesTablesData = () => {
	const [countrieData, SetCountriesData] = useState([]);

	useEffect(() => {
		showData();
	}, []);

	const showData = () => {
		axios.get("http://localhost:8080/data").then((res) => {
			// console.log(res.data);
			SetCountriesData(res.data);
		});
	};

	const SortBy = (str) => {
		if (str == "countryASC") {
			const update = countrieData.sort((a, b) => {
				if (a.country < b.country) {
					return -1;
				}
			});
			SetCountriesData([...update]);
		} else if (str == "countryDSC") {
			const update = countrieData.sort((a, b) => {
				if (a.country > b.country) {
					return -1;
				}
			});
			SetCountriesData([...update]);
		} else if (str == "CityASC") {
			const update = countrieData.sort((a, b) => {
				if (a.city < b.city) {
					return -1;
				}
			});
			SetCountriesData([...update]);
		} else if (str == "CityDSC") {
			const update = countrieData.sort((a, b) => {
				if (a.city > b.city) {
					return -1;
				}
			});
			SetCountriesData([...update]);
		} else if (str == "popDSC") {
			const update = countrieData.sort((a, b) => {
				return a.population - b.population;
			});
			SetCountriesData([...update]);
		} else if (str == "popASC") {
			const update = countrieData.sort((a, b) => {
				return b.population - a.population;
			});
			SetCountriesData([...update]);
		}
	};

	return (
		<div>
			<div>
				<ButtonInfo sortBy={SortBy} />
			</div>
			<table className="table" border="1">
				<thead>
					<tr>
						<th>id</th>
						<th>Country</th>
						<th>City</th>
						<th>Population</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{countrieData.map((e, index) => {
						return (
							<tr key={e.id} className="eDetails">
								<td className="id">{e.id}</td>
								<td className="country">{e.country} </td>
								<td className="city">{e.city}</td>
								<td className="population">{e.population}</td>
								<td className="Edit">Edit</td>
								<td className="Delete">Delete</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
