import Reacr from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from '../Header';
import TinCard from '../TinCard';
import Buttons  from '../Buttons';
import './style.css';

function App() {
  return (
    <div className="App">
     < Router>
      <Switch>
        <Route path="/chat" >
        <h1> I am a chat </h1>
      </Route>
     </Switch>
      <Header />
      <TinCard />
      <Buttons />
     
      </ Router>
  
    </div>
  );
}

export default App;
