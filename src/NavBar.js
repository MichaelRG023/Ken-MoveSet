
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <NavLink to="/">Login</NavLink>
            <NavLink to ="/FightingMoves">FightingMoves</NavLink>
        </nav>
    );
}

export default NavBar;