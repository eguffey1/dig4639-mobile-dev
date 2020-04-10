import React from 'react';

class List extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    contacts: []
    }
  }
    
  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/"
    window.fetch(proxy + "http://plato.mrl.ai:8080/contacts", {headers: {API: "guffey"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
    console.log("List Updated!")
  };
  
  render() {
    return (
      <div>
        <h4>Your List of Contacts:</h4>
        <hr />
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{index + 1}. <u>Name:</u> {value.name}<br />&nbsp;&nbsp;&nbsp;<u>Phone #:</u> {value.number}</p>;
         })
       }
      </div>
    )
  }
}
export default List
