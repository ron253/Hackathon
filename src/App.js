

import Home from "./components/Home";
import Card from "./components/Card";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { history } from './helpers/history';


function App() {
  return (
    <Router history = {history}>
      <Routes >
   
      
     
        <Route exact path = "/" element = { <Home />} />
        <Route exact path = "/parkingResults" element  = { <Card />} /> 
  
      </Routes>
    </Router>


  );
}

export default App;
