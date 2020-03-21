import './index.css'

class Card {
  constructor (props) {
    this.props = props
    this.element = document.createElement('div')
    const span = document.createElement('span')
    this.element.appendChild(span)
    span.innerHTML = this.props.content
    this.element.className = 'card'
  }

  render () {
    return this.element
  }
}
export default Card
