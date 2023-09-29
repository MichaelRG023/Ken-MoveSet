
import { useState } from "react";
import { kenMastersMoveset } from "./data.js";
import { modernKenMoveset } from "./data.js";


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
        <button onClick={toggleKenData}>{showMoves? 'Classic' : "Classic"} </button>
        <button onClick={toggleModernKenData}>{showModern? 'Modern': 'Modern'} </button>  
        
        {showMoves && (
            <ul>
                {kenMastersMoveset.map((moveset) => (
                    <li key={moveset.id}> 
                    <b> Name: {moveset.name}</b>
                    <p>StartUp: {moveset.startUp}</p>
                    <p>Active: {moveset.active}</p>
                    <p>Recovery: {moveset.recovery}</p>
                    <p>Cancel: {moveset.cancel}</p>
                    <p>Damage: {moveset.damage}</p>

                    </li>
                ))}
            </ul>
        )}

        {showModern && (
            <ul>
                {modernKenMoveset.map((movesetModern) => (
                    <li key={movesetModern.id}>
                    <b> Name: {movesetModern.name}</b>
                    <p>StartUp: {movesetModern.startUp}</p>
                    <p>Active: {movesetModern.active}</p>
                    <p>Recovery: {movesetModern.recovery}</p>
                    <p>Cancel: {movesetModern.cancel}</p>
                    <p>Damage: {movesetModern.damage}</p>
                    </li>
                ))}


            </ul>
            
        )}
       
        
       
     </div>
        
    );   

}
console.log("moves",kenMastersMoveset)



export default FightingMoves;