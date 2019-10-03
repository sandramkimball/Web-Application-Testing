import React, {useState} from "react";
import Display from './display';

export default function Dashboard() {
  
  
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  

  return (
    <div className="container">
      <section className="buttons-container">
        <Display/>
      </section>
    </div>
    
  );
}


<button className="btn-balls" onClick={()=> setBalls()}>Ball</button>
     
<button className="btn-strikes" onClick={()=> setStrikes()}>Strike</button>

<button className="btn-fouls" onClick={()=> setFouls()}>Foul</button>

<button className="btn-hits" onClick={()=> setHits()}>Hit</button>

 
const [balls, setBalls] = useState(0);
const [strikes, setStrikes] = useState(0);
const [fouls, setFouls] = useState(0);
const [hits, setHits] = useState(0);

/*
3 strikes/4 balls = 0 balls and strikes.
hit = 0 balls, strikes.

1 foul = +1 strike max 2. 
*/