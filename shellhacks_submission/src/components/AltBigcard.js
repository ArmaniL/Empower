import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

export default class AltBigCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      name,
      display_phone,
      review_count,
      price,
      transactions,
      categories,
      image_url,
      url,rating
    } = this.props.business;
    return (
      <Card>
          <Card.Header>{name}</Card.Header>
        <Card.Body>
        <Card.Text>{price}</Card.Text>
          <Card.Text>{display_phone}</Card.Text>
          <Card.Text>{" " + review_count + " reviews"}</Card.Text>
          <Card.Text>{"  " + rating + "/5"}</Card.Text>
          
          <Row>
            {categories.map((cat) => (
              <Col>
                <Card.Text>{cat.title}</Card.Text>
              </Col>
            ))}
          </Row>
          <Row>
            {transactions.map((trans) => (
              <Col>
                <Card.Text>{trans}</Card.Text>
              </Col>
            ))}
          </Row>
        </Card.Body>
        <Card.Footer><Card.Link href={url} >Check them out on Yelp!</Card.Link></Card.Footer>
      </Card>
    );
  }
}
