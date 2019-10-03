import React, {useState} from "react";
import "./App.css";

export default function Display() {
  
  
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  

  return (
    <section className="scoreboard">
        <h1>Up To Bat</h1>
        <div>
            <div className="ball-count">
                <h2>Balls</h2>
                <div>{balls}</div>
            </div>

            <div className="strike-count">
                <h2>Strikes</h2>
                <div>{strikes}</div>
            </div>
        </div>
    </section>   
    
  );
}




{/* 
    <button className="button-balls" onClick={()=> setBalls()}>Balls</button>
     
    <button className="button-strikes" onClick={()=> setStrikes()}>Strikes</button>
        */}