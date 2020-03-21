import React from 'react'
import { render } from 'react-dom'

let nameSearch = ''; //change your search query here

class Card extends React.Component { //class component Card
	
	state = { 
		data: [], //holds REST data for map
		loading: false
	}
	
	componentDidMount() {
		this.setState({loading: true})
		fetch(`https://rickandmortyapi.com/api/character/?name=${nameSearch}`) //REST fetch, queries by name
			.then(data => data.json()) //parse to JSON
			.then(data => this.setState({data: data.results, loading: false})) //store results into data array, turn off loading
	}

	render() {
		return (
			<div>
				{this.state.loading //if loading show 'loading...' else render query
					? "loading..."
					: <div>
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
