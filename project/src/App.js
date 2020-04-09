import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/"
    window.fetch(proxy + "http://plato.mrl.ai:8080/contacts/add", {headers: {API: "guffey", method: "POST"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });

  }

  render() {
    return (
      <div>
       {
         this.state.contacts.map((value, index) => {
           return <p key={index}>{value.name} {value.number}</p>;
         })
       }
      </div>
    );
  }
}

export default App;
