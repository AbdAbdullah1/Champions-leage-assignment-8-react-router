import React, { useEffect, useState } from 'react';

const League = (props) => {
    const [leagues, setLeauges] = useState([])
    
    useEffect(()=> {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeauges(data.leagues))
        console.log(leagues);
    }, )
    return (
        <div>
         <h1>Champions League</h1>
         <h1>leagues: {leagues.length}   </h1>
         <p>id {leagues.idLeague} </p>
        </div>
    );
};

export default League;