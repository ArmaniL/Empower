import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Iframe from "react-iframe";

export default class Map extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Iframe
        url={
          "https://www.google.com/maps/embed/v1/place?key=AIzaSyAmnW0eH3BrdVKIQq7b4cialug3UStLczk&q=" +
          this.props.address
        }
        styles={{ border: 0 }}
        width="600px"
        height="600px"
        display="initial"
        position="relative"
      />
    );
  }
}
