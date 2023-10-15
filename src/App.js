import React from 'react';
import {BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import Header from './Header';
import FightingMoves from './FightingMoves';
import './App.css';
import SignUp from './signUp';
import KenMastersLore from './kenMastersLore' 



// Routes, Routes are version 6 which is what I am using currently 
function App() {
  
  
  
  return (
    <div className='app'>
    <Router>
     <nav>
      <Header/>
       <ul >
        <li>
         <Link to="/">SignUp</Link>
        </li>
          <li>
           <Link to="/Lore">Lore</Link>
          </li>
           <li>
             <Link to="/fightingMoves">FightingMoves</Link>
           </li>
       </ul>
     </nav>


     <Routes>
      <Route path='lore' element={<KenMastersLore/>}/>
      <Route path='fightingMoves' element={<FightingMoves/>}/>
      <Route path="/" element={<SignUp/>}/>
      
     </Routes>

    </Router>
    
    </div>
  );
}

export default App;
