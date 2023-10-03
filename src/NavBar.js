
import React from "react";
import { Link } from "react-router-dom";

function NavBar(){

    
    return(
        <nav>
            <ul>
                <li>
                  <Link   to="/">Login</Link>
                </li>
                <li>
                  <Link to ="/FightingMoves">FightingMoves</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;