import React from 'react';
import axios from 'axios';

import "../style.css";

class CharacterCard extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			character: props.character
		}
	}

	render() {
		return (
			<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 m-4 px-2 rounded-lg bg-gray-200">
				<div className="px-6 py-4">
					<h2 className="font-bold text-xl mb-0">{this.state.character.name}</h2>
				</div>
				<div className="px-6 py-4 mb-2">
					<table>
						<tbody>
							<tr>
								<th className="text-left text-xs pr-5">Height</th>
								<td className="text-xs">{this.state.character.height}</td>
							</tr>
							<tr>
								<th className="text-left text-xs pr-5">Year of Birth</th>
								<td className="text-xs">{this.state.character.birth_year}</td>
							</tr>
							<tr>
								<th className="text-left text-xs pr-5">Hair Colour</th>
								<td className="text-xs">{this.state.character.hair_color}</td>
							</tr>
							<tr>
								<th className="text-left text-xs pr-5">Eye Colour</th>
								<td className="text-xs">{this.state.character.eye_color}</td>
							</tr>
							<tr>
								<th className="text-left text-xs pr-5">Skin Colour</th>
								<td className="text-xs">{this.state.character.skin_color}</td>
							</tr>
							<tr>
								<th className="text-left text-xs pr-5">Gender</th>
								<td className="text-xs">{this.state.character.gender}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default CharacterCard;
