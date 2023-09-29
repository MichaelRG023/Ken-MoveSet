import Header from './Header';
import FightingMoves from './FightingMoves';
import './App.css';
import SignUp from './signUp';
import {Switch,Route} from "react-router-dom";

function App() {
  return (
   <div>
    <NavBar/>

    <SignUp/>
    <Header/>


    <FightingMoves/>
    </div>
  );
}

export default App;
