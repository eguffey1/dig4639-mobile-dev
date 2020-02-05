class Component {
    constructor(props) {
        this.props = props;

    }
    onClick() {
        console.log("Clicked");
    }
    render() {
        this.addOne();
        return `<div></div>`;
    }
    addOne() {
        console.log(this.props.a + 1);
    }

}
export default Component;
