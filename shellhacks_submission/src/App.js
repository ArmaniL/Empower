import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Dashboard } from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar , Nav , Container } from 'react-bootstrap';
import HomeScreen from "./pages/HomeScreen.js"
import MapView from './pages/MapView';
import AboutUs from './pages/AboutUs';



function App() {
  return (
    <Router>
    
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Empower</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/View">View</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
    
    <Switch>  
    <Route component={HomeScreen} exact path="/" />
    <Route component={MapView} exact path="/View" />
    <Route component={AboutUs} exact path="/AboutUs" />
    </Switch>
    
    
    <Dashboard></Dashboard>
    </Router>
  )
}

export default App;
