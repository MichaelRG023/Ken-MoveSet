import React from "react"
import './App.css'
import {kenMasters} from './data.js'

function KenMastersLore(){


    const listLore = kenMasters.map(lores =>
        <div className="characteristics" key={lores.id}>
            <div>
                <h2>Characteristics</h2>
                <h3>Species {lores.species}</h3>
                <h3>Weight {lores.weight}</h3>
                <h3>Eyecolor{lores.Eyecolor}</h3>
                <h3>Haircolor{lores.Haircolor}</h3>
                <h3>Bloodtype{lores.Bloodtype}</h3>
                <h3>Measurements{lores.Measurements}</h3>
                <h2>Personal</h2> 
                <h3> First Game {lores.firstgame}</h3>
                
            </div>
        </div>
        );
        




return(
    <div >
     <h1 className="header-title">
        <span>Ken Masters</span>
     </h1>
       <img className="ken-card"
         src="https://www.streetfighter.com/6/assets/images/character/ken/ken.png"
        alt="Ken"
         />
        
         <figcaption>Ken, as he appears in <a href="https://streetfighter.fandom.com/wiki/Street_Fighter_6">Street Fighter 6</a></figcaption>
       
        <ul>{listLore}</ul>
          <p><strong>Ken Masters</strong> <em>(ケン・マスターズ Ken Masutāzu?)</em>, also known as the Framed Champion <em>(額装されたチャンピオン Gakusō sa reta chanpion?)</em>, is the deuteragonist of the Street Fighter series, first appearing in the original Street Fighter. Similar to his longtime best friend and rival Ryu, Ken's goal is to test his power against many different fighters and strives to become stronger, but holds more restraint due to not wanting to jeopardize his family life."</p>
          <h2>Biography</h2>
          <h3>Appearances</h3>
          <p> Ken is most easily recognized by wearing different sparring gloves that are either the color of his blonde hair or his bright red gi (he wears brown gloves in most other appearances) that features neatly torn off sleeves, similar to Ryu's (Capcom has officially stated that a red gi was chosen to stand out and to reflect his more flashy style of fighting)[citation needed] and it is usually seen in better shape than Ryu's (except for in the Street Fighter III series), since he can easily afford to keep up with and/or own spares. Ken's natural hair color is as black as his long and spiky eyebrows but he has dyed it blonde.[2][3] He wears a black belt at his waist and fights without footwear. </p>
          <p>In the Street Fighter Alpha series, he had longer hair tied into a ponytail with a red ribbon. The official event that took place where Ken gives up his ribbon is that he passes it down to Ryu during Street Fighter Alpha 2 (as stated in Ken's own ending); Ryu was distracted during his fight with Ken because he had just fought Sagat and ended up losing. To remind him of their fight, Ken handed his friendly rival his own ribbon that would later become the signature red headband worn by Ryu since Street Fighter II and onward. </p>
          <p>In Street Fighter II V, Ken's hair is dyed red, similar to the live-action movie and the animated series. Ken usually wears casual outfits throughout most of the episodes; for example, he dresses in a yellow formal suit jacket with a red tank top, matching white pants with a black leather belt to his waist and black dress shoes, but he still does sports the same signature bright red gi, though he always fights barehanded.</p>
          <p>By the time of Street Fighter V, Ken's appearance has undergone the first major design change in the character's history. Ken's gi top now hangs around his waist and he wears a black v-neck training shirt with several red linings in its place. He sports matching black sparring gloves and his hair has grown longer, to the point of being tied in a topknot. Most likely due to events yet undisclosed instead of hanging loose which it was grown into medium length after the events of Street Fighter IV series and now wears black ankle wraps with red linings instead of just barefoot. </p>
          <p>In Street Fighter 6, his blond hair returns to his original look from his playable appearance in Street Fighter III sub-series and is no longer wearing a red gi. His main outfit was based on his second alternate costume in Street Fighter V; his leather jacket is replaced by a hooded jacket that reaches below the knee and the sign "Eagle Shipping Company" ("E.S.C." for short) at the back of his jacket and has white folded sleeves that reaches through his mid-forearm. Underneath is a black tank top, red trousers with a loose gray drawstring and yellow high-top sneakers with blue linings at the back. Ken also wears his classic yellow gloves, along with a pair of black training gloves and a family necklace on his neck. </p>
          <h3>Concept</h3>
          <p> when <a href="https://streetfighter.fandom.com/wiki/Akiman">Akiman</a> draws Ken, he uses Benny Urquidez’s appearance in the Square Jungle (Shikakui Jungle, 四角いジャングル) as inspiration. The manga was written by Ikki Kajiwara the same author who made Karate Baka Ichidai (Karate Master) where Ryu and Sagat’s origins reside.[27] Ken's Hell Wheel was also inspired by Ikki Kajiwara's manga, Jūdō Icchokusen (“Jūdō’s straight line”).[28][29] In Street Fighter V, Ken was given a new look that highlights his playful personality. They aimed for an atmosphere in line with a successful and well-liked person with a family.[30] </p>
          <p>Ken could have also been inspired by real-life Karate world champion, Joe Lewis. Like Ken, Lewis was a blonde American who trained a traditional style in Japan, then went back to the U.S to become a famous champion. Lewis also founded Full Contact Karate and became a world champion at that as well. In addition to his similar looks, Lewis was also known (as were many American Karate fighters of his time) for using colored Karate uniforms, including a red one. Lewis notably appeared on the the cover of Combat Magazine dressed in red with a black belt.[citation needed] He was challenging of traditional Karate ways and modified much of his original "Shorin Ryu" style, similar to Ken's modifications that distinguish him from Ryu, a traditional fighter. </p>
          <p> Ken was originally named Yu (ユウ), being named after Street Fighter planner Hiroshi Matsumoto. However, Hiroshi changed Ken's name to mean "fist" instead during development.[31][32] He gained his last name when toy company Hasbro got the license to add the characters from Street Fighter II to their G.I. Joe toyline. It is widely believed, though never confirmed, that the name was given to avoid copyright confusion with the character Ken Carson from Mattel's Barbie toyline. It is also widely believed (and unconfirmed) that the name stems from Mattel's Masters of the Universe toyline, in reference to the character He-Man.</p>
          <h3>Personality</h3>
          <p>While Ryu is the more serious and stoic of the two, Ken is the complete opposite - stylish, unorthodox and unpredictable, as well as being much more violent and aggressive than Ryu. He is an alpha male with a giant ego and constantly reminds his opponents about his greatness. While he can be brash, egotistical and arrogant at times, his heart is pure. He is generally kind, friendly, a good person and very easygoing which led him into starting a family of his own. He never backs down from a fight no matter how difficult it looks.</p>
          
    </div>
)
   
}




export default KenMastersLore;