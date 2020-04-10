import React from 'react';
import List from './components/List/List.js'
import Delete from './components/Delete/Delete.js'
import Profile from './components/Profile/Profile.js'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  add() {
    const proxy = "https://cors-anywhere.herokuapp.com/"
		fetch(proxy + 'http://plato.mrl.ai:8080/contacts/add', {
			method: 'POST',
			body: JSON.stringify({
				name: this.refs.firstName.value + ' ' + this.refs.lastName.value,
				number: this.refs.phoneNum.value
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


  addContact = (event) => {
    event.preventDefault();
    this.add();
  }

  render() {
  return (
    <div>
      <h2>Contacts App</h2>
      <form onSubmit={this.addContact}>
        <fieldset>
          <legend>New Contact</legend>
          <input ref="firstName" type='text' placeholder='First Name'/>
          <input ref="lastName" type='text' placeholder='Last Name'/>
          <input ref="phoneNum" type='text' placeholder='Phone Number'/>
          <button type="submit">Add</button>
        </fieldset>
      </form>
      <Delete />
      <Profile />
      <List />
    </div>

    );
  }
}

export default App;
