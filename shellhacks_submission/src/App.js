import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Dashboard } from './components/Dashboard';
import logo from "./images/Empower-navbar.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar , Nav , Container, Image } from 'react-bootstrap';
import Searchbar from './components/Searchbar';
import HomeScreen from "./pages/HomeScreen.js"
import MapView from './pages/MapView';
import AboutUs from './pages/AboutUs';



function App() {
  return (
    <Router>
    
    <div>
      <Navbar expand="lg" className="bg-danger bg-gradient" >
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo}  alt="Logo" width="50" height="50" className="d-inline-block"/>
          <span style={{color:'white'}}>Empower</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="/View" style={{color:'white'}}>View</Nav.Link>
            <Nav.Link href="/AboutUs" style={{color:'white'}}>About Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </div>
    
    
    <Switch>  
    <Route component={Dashboard} exact path="/" />
    <Route component={AboutUs} exact path="/AboutUs" />
    </Switch>
    
    
    
    </Router>
  )
}

export default App;
