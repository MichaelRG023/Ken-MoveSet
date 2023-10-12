
import React from "react";
import { Link } from "react-router-dom";
import './App.css'

function NavBar(){

    
    return(
        <nav>
            <ul>
                <li>
                  <Link to="/">SignUp</Link>
                </li>
                <li>
                  <Link to ="/FightingMoves">FightingMoves</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;