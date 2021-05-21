import React, { Component } from "react";
import SpecialInputConnected from "../../containers/changeStatContainer";
import SpecialOutputConnected from "../../containers/showStatsContainer";

import pic from "../../pics/vaultboy.png";
import "./SpecialCreation.css";

class SpecialCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.callback = this.callback.bind(this);
  }

  callback(text) {
    this.setState({ value: text });
  }

  render() {
    return (
      <section className="falloutSpecial">
        <img className="vaultboyImage" src={pic} />
        <SpecialInputConnected />
        <SpecialOutputConnected />
      </section>
    );
  }
}

export default SpecialCreation;