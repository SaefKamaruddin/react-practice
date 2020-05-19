import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ["tag1", "tag2", "tag3"],
  };

  //   constructor() {
  //     super();
  //     // console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatvalue()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatvalue() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
