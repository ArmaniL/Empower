import React from 'react';

export class Dashboard extends React.Component{


    constructor(){



        super()
        this.state={
          longitude:0,
          latitude:0,
          accuracy:0,
          city:"",
          smallBusinesses:[],
          fin:false
        }
    
      }

      async searchYelp(){
        const response = await fetch("https://active-apogee-327103.ue.r.appspot.com/")
        const data =await response.json();
        this.setState({smallBusinesses:data.businesses,fin:true})
      }

      render(){
          return (
            <div style={{display:'flex',flexDirection:'column'}}>
            {this.state.fin?this.state.smallBusinesses.map((business)=><>{business.name}</>):<>hello</>}
            </div>
          )
      }


    componentDidMount(){
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
          
          
          
          navigator.geolocation.getCurrentPosition(
            (pos)=>{
                const crd=pos.coords
                
                this.setState({longitude:crd.longitude,latitude:crd.latitude,accuracy:crd.accuracy})
                const mapsurl=("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAmnW0eH3BrdVKIQq7b4cialug3UStLczk&latlng="+this.state.latitude.toString()+","+this.state.longitude.toString())
                fetch(mapsurl).then((response)=> response.json()).then((data)=>{
                   console.log(data)
                   console.log(mapsurl)
                    const localcity=data.results[2].address_components[1]["long_name"]
                   this.setState({city:localcity})
                   this.searchYelp();
                })
              }
            
            , (err)=>{  
                //If there is a problem with the geolocaction just use a random city
                const cities=["New York","Miami","San Diego","Atlanta","Seattle","Chicago","Dallas","San Jose"]
                const ranNumber=Math.floor(Math.random() * cities.length)
                this.setState({city:cities[ranNumber]})
                this.searchYelp();
        
              
          }, options);
    }
}