import React from 'react';
import {BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import Header from './Header';
import FightingMoves from './FightingMoves';
import './App.css';
import SignUp from './signUp';



// Routes, Routes are version 6 which is what I am using currently 
function App() {

  
  
  return (
  
    <Router>
     <nav>
      <Header/>
      <ul>
        <li>
          <Link to="/">SignUp</Link>
        </li>
        <li>
          <Link to="/fightingMoves">FightingMoves</Link>
        </li>
      </ul>
     </nav>


     <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path='fightingMoves' element={<FightingMoves/>}/>
     </Routes>

    </Router>
  );
}

export default App;
