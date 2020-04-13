import React from 'react'
import { render } from 'react-dom'


export default class App extends React.Component { //class component Card
	constructor() {
		super()
	
	this.state = { 
		data: [], //holds REST data for map
	}
}
	
	search = () => {
		let nameSearch = document.querySelector('#Search').value;
		console.log(nameSearch) //change your search query here
		fetch(`https://rickandmortyapi.com/api/character/?name=${nameSearch}`) //REST fetch, queries by name
			.then(data => data.json()) //parse to JSON
			.then(data => this.setState({data: data.results})) //store results into data array, turn off loading
	}

	render() {
		return (
			<div>
				{this.state.loading //if loading show 'loading...' else render query
					? "loading..."
					: <div>
						<input ref="search" type="text" placeholder="Enter Name Here" id="Search" onKeyUp={this.search}/>
						{this.state.data.map(char => {
							return (
								<div key={char.id}>
								<img src={char.image} alt={char.name}/>
								<h2>Name: {char.name}</h2>
								<p><strong>Species:</strong> {char.species}</p>
								<p><strong>Gender:</strong> {char.gender}</p>
								<p><strong>Alive/Dead:</strong> {char.status}</p>
								<p><strong>Last Seen:</strong> {char.origin.name}</p>
							</div>
							)
						})}	
					</div>
				}	
			</div>
		)
	}
}

render(
	<Card />, 
	document.getElementById('root')
)
