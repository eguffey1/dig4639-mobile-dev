import React from 'react';
import Data from './data.json';
import Card from '../Card';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardArr: Data.cardArr
      }
    }
  

  closeBox(id) {
    let cardArr = this.state.cardArr.filter((value) => value.id !== id);
    this.setState({cardArr});
  }

  render() {
    return (
      this.state.cardArr.map((value) =>
        <Card key={value.id} closeBox={() => 
          this.closeBox(value.id)} id={value.id}
          content={value.content} header={value.header} />)
    );
  }
}

export default CardList;
