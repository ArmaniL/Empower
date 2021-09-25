import React, { useEffect } from "react";
import { Button } from "react-bootstrap"
<<<<<<< HEAD
import Map from "../components/Map";
import BigCard from "../components/Bigcard";
import { Col, Row } from "react-bootstrap";

=======
import { Dashboard } from "../components/Dashboard";
>>>>>>> a89220b6332c76e5ea2ab0ddd7aef599ef6d3461

function MapView(props){
    const {address,business} = props;
    useEffect(()=>{
        console.log(this.state.city);
    const url = "https://active-apogee-327103.ue.r.appspot.com/id?id="+business.id
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ smallBusinesses: data.businesses, fin: true });
  
    })
    
    
    return(
<<<<<<< HEAD
    <>
    <Row>
        <Col>
        <Map address={address}></Map>
        <BigCard business ={business}></BigCard>
        </Col>
    </Row>
    
    </>
=======
    <div>
    <Button>MapView</Button>
    <Dashboard></Dashboard>
    </div>
>>>>>>> a89220b6332c76e5ea2ab0ddd7aef599ef6d3461
    )


}
export default MapView;