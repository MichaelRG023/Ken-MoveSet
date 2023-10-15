import React from "react";
import { useState } from "react";
import { kenMastersMoveset } from "./data.js";
import { modernKenMoveset } from "./data.js";
import "./App.css"


function FightingMoves(){

    const [showMoves,setShowMoves] = useState(false);
    const [showModern,setShowModern] = useState(false);

        // ! operator can save us from additional — or unnecessary — null or undefined case handling.
          const toggleKenData =()=>{
           setShowMoves(!showMoves);

            };
        
            const toggleModernKenData =()=>{
                setShowModern(!showModern);
            };




    return (
        
     <div>
        <button className="my-button"onClick={toggleKenData}>{showMoves? 'Classic' : "Classic"} </button>
        <button className="my-button" onClick={toggleModernKenData}>{showModern? 'Modern': 'Modern'} </button>  
        
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
                    <b> Name: {moveset.name}</b>
                    <p>StartUp: {moveset.startUp}</p>
                    <p>Active: {moveset.active}</p>
                    <p>Recovery: {moveset.recovery}</p>
                    <p>Cancel: {moveset.cancel}</p>
                    <p>Damage: {moveset.damage}</p>
                    {/* {showMoves === "FirstCard"&& <FightingMoves toggleKenData={kenMastersMoveset} title="Classic"/>} */}
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
                     <b> Name: {movesetModern.name}</b>
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
console.log("moves",kenMastersMoveset)



export default FightingMoves;