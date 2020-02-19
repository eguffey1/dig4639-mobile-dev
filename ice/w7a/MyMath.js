function Sum (a, b) {
  let result = undefined
  if(typeof a == "number" && typeof b == "number") {
  result = a + b
  }
  return result
}
function AddList(args) {

    let result = 0;
  for(let i = 0; i < args.length; i++) {
    result += args[i]
  }
  return result
}
function DivideBy(a, b) {
  if(b == 0) {
    console.log("failed, cannot divide by 0");
  }
  return a / b
}
function ContainsString (a, b) {
  let result = false
  if(typeof a == "string" && typeof b == "string") {
  result = true
  }
  return result;
}
function ReSortedNumbers(a) {
  let result = null
  for(let i = 0; i < a.length; i++) {
    if(typeof parseInt([i]) != "number") {
      console.log('there is a value that is not a number')
    }
    result = a.sort();
    console.log(result)
    return result
  }
}
function Adder(a,b) {
  class Adder {
    constructor(props) {
        this.props = props;
    }
  
    sum() {
            return (this.props.a + this.props.b);
    }
    render() {
        console.log(`The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}`)
    }
}
}
export { Sum };
export { DivideBy };
export { AddList };
export { ContainsString };
export { ReSortedNumbers };
export { Adder };
