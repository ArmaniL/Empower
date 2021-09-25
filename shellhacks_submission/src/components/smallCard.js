import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

export default class SmallCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.phone}</Card.Text>
          <Card.Text>{" " + this.props.review_count + " reviews"}</Card.Text>
          <Card.Link></Card.Link>
          <Card.Text>{this.props.price}</Card.Text>
          <Row>
            {this.props.categories.map((cat) => (
              <Col>
                <Card.Text>{cat.title}</Card.Text>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
