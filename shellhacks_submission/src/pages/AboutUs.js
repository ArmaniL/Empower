import React from "react";
import { Button } from "react-bootstrap"
import { Dashboard } from "../components/Dashboard";
import { useState } from "react";


function AboutUs(){
    const [click, setclick] = useState(false)
    const [input, setinput] = useState("")

    if (click) {
        return <Dashboard term={input}></Dashboard>
    } else {
        return(
            //<Button>About Us</Button>
            <div>
                <input type="text" placeholder="Search for small businesses..." onChange={(e)=>setinput(e.target.value)}></input>
                <Button type="submit" onClick={()=>setclick(true)}>Search</Button>
            </div>
        )   
    }
}
export default AboutUs;