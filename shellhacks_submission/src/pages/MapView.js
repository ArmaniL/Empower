import React, { useEffect } from "react";
import { Button } from "react-bootstrap"
import Map from "../components/Map";
import BigCard from "../components/Bigcard";
import { Col, Row } from "react-bootstrap";


function MapView(props){
    const {address,business} = props;
    useEffect( ()=>{
        const getData = async()=>{
            console.log(this.state.city);
            const url = "https://active-apogee-327103.ue.r.appspot.com/id?id="+business.id
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            this.setState({ smallBusinesses: data.businesses, fin: true });
        }
  
    })
    
    
    return(
    <>
    <Row>
        <Col>
        <Map address={address}></Map>
        <BigCard business ={business}></BigCard>
        </Col>
    </Row>
    
    </>
    )


}
export default MapView;