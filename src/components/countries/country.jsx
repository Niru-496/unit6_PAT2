import axios from "axios";
import { useEffect, useState } from "react";

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

	const SortByCountry = () => {
		SetCountriesData(
			countrieData.sort((a, b) => {
				a - b
			})
		);
	};

	return (
		<div>
			<table className="table" border="1">
				<thead>
					<tr>
						<th>id</th>
						<th onClick={SortByCountry}>Country</th>
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
