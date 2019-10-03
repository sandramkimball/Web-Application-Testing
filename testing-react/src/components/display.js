import React from "react";


export default function Display({balls, strikes, hits}) { 

  return (
    <section className="scoreboard">
        <h1>Up To Bat</h1>
        <div className='count-display'>
            <div className="stat-count">
                <h2>Balls</h2>
                <div>{balls}</div>
            </div>

            <div className="stat-count">
                <h2>Strikes</h2>
                <div>{strikes}</div>
            </div>
            
            <div className="stat-count">
                <h2>Hits</h2>
                <div>{hits}</div>
            </div>
        </div>
    </section>   
    
  );
}
