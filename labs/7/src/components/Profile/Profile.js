import React from 'react';

class Profile extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    contacts: {}
    }
  }
    
  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/"
    window.fetch(proxy + "http://plato.mrl.ai:8080/profile", {headers: {API: "guffey"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data});
    });
  };
  
  render() {
    return (
      <div>
        <h4>Current User:</h4>
        <p><u>Name:</u> {this.state.contacts.name} <br /><u>Total Entries:</u> {this.state.contacts.count}</p>
        <hr />
      </div>
    )
  }
}
export default Profile