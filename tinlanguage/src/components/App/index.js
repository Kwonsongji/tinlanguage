import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import TinCard from '../TinCard';
import Buttons from '../Buttons';
import Chats from '../Chats/index'
import './style.css';

function App() {
  return (
    <div className="App">
     {/* <Header /> */}
      <Router> 
     <Header /> 
        <TinCard />
        <Buttons />
        < Routes>
          <Route exact path="/chat" component={Chats} > </Route>   
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
