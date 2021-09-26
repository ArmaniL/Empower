import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

export default class BigCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {
      title,
      phone,
      review_count,
      price,
      transactions,
      categories,
      image_url,
      url,
    } = this.props.business;
    return (
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{phone}</Card.Text>
          <Card.Text>{" " + review_count + " reviews"}</Card.Text>
          <Card.Text>{price}</Card.Text>
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
