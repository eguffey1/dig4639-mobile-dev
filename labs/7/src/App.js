import React from 'react';
import "./App.css"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      contacts: []
    };
  }

  componentDidMount() {
    this.fetchProfile();
    this.fetchUsers();
  }

  add = (event) => {
    event.preventDefault();
		fetch('http://plato.mrl.ai:8080/contacts/add', {
			method: 'POST',
			body: JSON.stringify({ name: this.refs.firstName.value + ' ' + this.refs.lastName.value,
			number: this.refs.phoneNum.value }),
			headers: { "Content-type": "application/json", API: "guffey" }
    })
    .then(res => { return res.json() })
    .then(() => {
      this.fetchProfile();
      this.fetchUsers();
			});
  }
  
  delete = (index) => {
    fetch('http://plato.mrl.ai:8080/contacts/remove', {
      method: 'POST',
      body: JSON.stringify({ position: index }),
      headers: { "Content-type": "application/json", API: "guffey" }
    })
    .then(res => {  return res.json() }) 
    .then(() => {
      this.fetchProfile();
      this.fetchUsers();
    });
  }
  
  fetchProfile() {
    window.fetch("http://plato.mrl.ai:8080/profile", { 
      headers: { API: "guffey" } 
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ profile: data });
    });
  }
  fetchUsers() {
    window.fetch("http://plato.mrl.ai:8080/contacts", { 
      headers: { API: "guffey" } 
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({ contacts: data.contacts });
    });
  }

  render() {
  return (
    <div>
      <h2 className="header">Contacts App</h2>
      <form onSubmit={this.add}>
        <fieldset>
          <legend className="legend"><strong>New Contact</strong></legend>
          <input ref="firstName" type='text' placeholder='First Name' className="inputBox"/>
          <input ref="lastName" type='text' placeholder='Last Name' className="inputBox"/>
          <input ref="phoneNum" type='text' placeholder='Phone Number' className="inputBox"/>
          <button type="submit" className="myButton">Add</button>
        </fieldset>
      </form>
      <div>
        <hr />
        <h3>Current User:</h3>
        <p><strong>Name:</strong> {this.state.profile.name} <br />
        <strong>Total Entries:</strong> {this.state.profile.count}</p>
        <hr />
      </div>
      <div>
        <h3>Your List of Contacts:</h3>
        <div>
       {
         this.state.contacts.map((value, index) => {
           return <p className="pBody" key={index}>{index + 1}. <u>Name:</u> {value.name}<br />
           &nbsp;&nbsp;&nbsp;<u>Phone #:</u> {value.number}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" 
           onClick={() => this.delete(index)} className="myButton2" id={index}>Delete</button></p>;
         })
       }
       </div>
      </div>
    </div>
    );
  }
}

export default App;
