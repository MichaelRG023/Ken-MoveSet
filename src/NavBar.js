
import React from "react";
import { Link } from "react-router-dom";
import './App.css'

function NavBar(){

    
    return(
        <nav>
            <ul>
                <li className="li">
                  <Link to="/">Sign Up</Link>
                </li>
                <li>
                  <Link to ="/FightingMoves">FightingMoves</Link>
                </li>
                <li>
                <Link to ="/KenMasterLore">Lore</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;