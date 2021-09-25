import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {HomeScreen} from "./pages/HomeScreen"

function App() {
  return (
    <Router>
    <Switch>  
    <Route component={HomeScreen} exact path="/" />
    </Switch>
    </Router>
  );
}

export default App;
