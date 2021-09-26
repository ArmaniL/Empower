import React, { useEffect } from "react";
import { Button } from "react-bootstrap"
import Map from "../components/Map";
import AltBigCard from "../components/AltBigcard";
import { Col, Row,Image } from "react-bootstrap";
import { Parallax } from 'react-scroll-parallax';

function AltMapView(props){
    const {business} = props;
    const address = business.location.address1
    const url = business.image_url;
    
    return(
    <>
    <Row style={{display:'flex',width:'100%',height:'25rem'}}>
        <div style={{ position: "relative",
  width: "100%",
  height: "100%",
  overflowx: "hidden",
  overflowy: "scroll",
  perspective: "8px",
  perspectiveorigin: "0%",
  display: "flex"}}>
        <Image src={url} style={{display:'flex',width:'100%',height:'25rem'}}></Image>
        </div>
    </Row>
    <Row style={{maxwidth: "960px",
    margin: "0 auto",
    boxsizing: "border-box",
    mozboxsizing: "border-box",
    position: "relative",
    zindex: 2,
    height: "100%"}}>
        <Col>
        <Map style={{width:'100%'}} address={address}></Map>
        </Col>
        <Col>
        <AltBigCard style={{width:'100%'}} business ={business}></AltBigCard>
        </Col>
    </Row>
    
    </>
    )


}
export default AltMapView;