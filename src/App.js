import logo from './logo.svg';
import './App.css';
import {Switch,Link,Route} from "react-router-dom";
import {Home} from "./Components/Home";
import {Prerequisite} from "./Components/Prerequisite";
import {Info} from "./Components/Info";
function App() {
  return (
    <div className="App">
      <div style={{display : "flex",justifyContent:"space-evenly",border : "1px solid black",fontSize:"30px",backgroundColor:"GrayText"}}>
        <Link to="/">Home</Link>
        <Link to="/info"> Info</Link>
        <Link to="/Prerequisite">Prerequisite</Link>
      </div>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact  path="/info"><Info/></Route>
        <Route exact path="/PrerEquisite"><Prerequisite/></Route>
      </Switch>
      
    </div>
  );
}

export default App;
