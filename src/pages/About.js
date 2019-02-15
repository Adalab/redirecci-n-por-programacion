import React, {Component} from "react";

class About extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }
  goBack(){
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <button onClick={this.goBack}>Volver</button>
      </div>
    );
  }
}

export default About;