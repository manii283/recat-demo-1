import React, { Component } from "react";
import { FaSkype, FaWhatsapp, FaQuestion } from 'react-icons/fa';

export default class Icon extends Component {
  constructor(props) {
    super(props);
    switch (this.props.icon) {
      case "skype":
        this.iconValue = "skype icon";
        this. logo = <FaSkype />
        break;
      case "whatsapp":
        this.iconValue = "whatsapp icon";
        this. logo = <FaWhatsapp />
        break;
      default:
        this.iconValue = "non icon";
        this. logo = <FaQuestion/>
        break;
    }
  }
  render() {
    return (
      <p>
        <em>{this.iconValue}</em> {this.logo} <strong>{this.props.value}</strong>
      </p>
    );
  }
}
    