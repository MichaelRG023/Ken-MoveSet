import React from "react";
import { useState } from "react";
import {kenMastersMoveset} from "./data.js";
import { modernKenMoveset } from "./data.js";
import "./App.css"



function FightingMoves(){
    const [query,setQuery] = useState('');
    const [searchResults,setSearchResults] = useState([])
    const [showMoves,setShowMoves] = useState(false);
    const [showModern,setShowModern] = useState(false);
    

        // ! operator can save us from additional — or unnecessary — null or undefined case handling.
          const toggleKenData =()=>{
           setShowMoves(!showMoves);

            };
        
            const toggleModernKenData =()=>{
                setShowModern(!showModern);
            };

          const handleInputChange=(e)=>{
            setQuery(e.target.value)

          }
          const handleSearch=()=>{
            const results = kenMastersMoveset.filter((item)=>
            item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(results);
          }
          
    return (
        
     <div >
        <button className="my-button"onClick={toggleKenData}>{showMoves? 'Classic' : "Classic"} </button>
        <button className="my-button" onClick={toggleModernKenData}>{showModern? 'Modern': 'Modern'} </button> 
        <label>Search</label>
        <input className="search-bar"
        type="text"
        placeholder="Enter your search"
        value={query}
        onChange={handleInputChange}
        />
        <button onClick={handleSearch}></button>
        <h2 className="search-results">Search Results</h2>
        <ul>
            {searchResults.map((result)=>(
                <div key={result.id}>{result.name}</div>
            ))}
        </ul>




        {showMoves && (
            <ul className="grid">
                {kenMastersMoveset.map((moveset) => (
                    <div className="FirstCard" key={moveset.id}> 
                    <h1>Classic</h1>
                    <img 
                    src={moveset.image}
                    alt={moveset.name}
                    className="card_image"
                    />
                    <h3> Name:{moveset.name}</h3>
                    <p>StartUp: {moveset.startUp}</p>
                    <p>Active: {moveset.active}</p>
                    <p>Recovery: {moveset.recovery}</p>
                    <p>Cancel: {moveset.cancel}</p>
                    <p>Damage: {moveset.damage}</p>
                  
                    </div>
                ))}
            </ul>
        )}

        {showModern && (
            <ul className="grid">
                {modernKenMoveset.map((movesetModern) => (
                    <div className="Second-Card" key={movesetModern.id}>
                        <h1> Modern </h1>
                        <img
                        src={movesetModern.image}
                        alt={movesetModern.name}
                        className="moderncard_image"
                        />
                     <h3>Name:{movesetModern.name}</h3>
                     <p>StartUp: {movesetModern.startUp}</p>
                     <p>Active: {movesetModern.active}</p>
                     <p>Recovery: {movesetModern.recovery}</p>
                     <p>Cancel: {movesetModern.cancel}</p>
                     <p>Damage: {movesetModern.damage}</p>
                    </div>
                ))}


            </ul>
            
        )}
       
        
       
     </div>
        
    );   

}




export default FightingMoves;