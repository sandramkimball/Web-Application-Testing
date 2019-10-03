import React, {useState} from "react";
import Display from './display';

export const addHits = hits => hits + 1;
export const addFouls = fouls => fouls + 1;

export default function Dashboard() {
  
  let [balls, setBalls] = useState(0);
  let [strikes, setStrikes] = useState(0);
  let [fouls, setFouls] = useState(0);
  let [hits, setHits] = useState(0);

  if (strikes === 4){
      setBalls(0);
      setStrikes(0);
  }

  if(balls === 5){
      setBalls(0);
      setStrikes(0);
  }

//   if(hits){
//     setBalls(0),
//     setStrikes(0)
//   }


  return (
      <section className="dashboard-container">
        <Display
        balls={balls}
        strikes={strikes}
        hits={hits}/>
        <div className='button-container'>
            <button className="btn-balls" onClick={()=> setBalls(balls + 1)}>Ball</button>
            <button className="btn-strikes" onClick={()=> setStrikes(strikes + 1)}>Strike</button>

            <button className="btn-fouls" onClick={()=> setFouls(addFouls(fouls))}>Foul</button>

            <button className="btn-hits" onClick={()=> setHits(addHits(hits))}>Hit</button>
        </div>
      </section>
  );
}

/*
hit = 0 balls, strikes.
1 foul = +1 strike max 2. 
*/

// setBalls(balls + 1)
// setStrikes(strikes + 1)
// setFouls(fouls + 1)
// setHits(hits + 1)