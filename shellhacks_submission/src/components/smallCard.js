import React from 'react'
import Card from 'react-bootstrap/Card'

export default class SmallCard extends React.Component{

    constructor(){
        super()
    }

render(){

    return(
        <Card>
        <Card.Img variant="top" src={this.props.url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
           {this.props.text}
            </Card.Text>
        </Card.Body>
      </Card>

    )
}

}