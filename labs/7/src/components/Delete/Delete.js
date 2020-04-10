import React from 'react'

class Delete extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: []
    }
  }
  delete() {
    const proxy = "https://cors-anywhere.herokuapp.com/"
		fetch(proxy + 'http://plato.mrl.ai:8080/contacts/remove', {
			method: 'POST',
			body: JSON.stringify({
				position: this.refs.loc.value - 1,
			}),
			headers: {
        "Content-type": "application/json; charset=UTF-8",
        API: "guffey"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					contacts:json
				});
			});
	}
  deleteContact = (event) => {
    event.preventDefault();
    this.delete();
  }

  render() {
  return (
  <div>
    <div>
      <form onSubmit={this.deleteContact}>
        <fieldset>
          <legend>Delete Contact</legend>
          <input ref="loc" type='text' placeholder='Which entry number?'/>
          <button type="submit">Delete</button>
        </fieldset>
      </form>
    </div>
  </div>

    );
  }
}

export default Delete;