import React from 'react';
import './index.css';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.header}</h3>
        <p>{this.props.content}</p>
        <input type="button" value="X" className="close"
          onClick={() => this.props.closeBox(this.props.id)} />
      </div>
    );
  }
}

export default Card;
