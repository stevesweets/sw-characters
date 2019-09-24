import React from 'react';
import axios from 'axios';
import CharacterCard from '../components/character-card';

import "../style.css";



class Index extends React.Component {
	static async getInitialProps () {
		const res = await axios.get('https://swapi.co/api/people');
        return {characters: res.data.results}
	}

	render() {
		console.log()
		return (
		<div className="mx-auto">
			<div className="p-4 bg-white">
				<h1 className="text-purple-500 leading-normal border-b-2 pb-2">Star Wars Characters</h1>
				<div className="flex flex-wrap -mx-2">
					{this.props.characters.map((character, i) => {
						return (
							<CharacterCard key={i} character={character} />
						)
					})}
				</div>
				<p className="text-gray-600 text-xs">
					* terms
				</p>
				<table className="self-center">
					<tbody>
						<tr>
							<th className="text-left text-xs text-gray-600 pr-5">BBY</th>
							<td className="text-xs text-gray-600">Before the Battle of Yavin</td>
						</tr>
						<tr>
							<th className="text-left text-xs text-gray-600 pr-5">Height</th>
							<td className="text-xs text-gray-600">shown in cm</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		);
	}
}

export default Index;
