import React, { useEffect, useState } from 'react';

const League = (props) => {
    const [leagues, setLeauges] = useState([])
    // const sliceLeagues = leagues.splice(12, 500)
      
    useEffect(()=> {
        
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setLeauges(data.teams))
        console.log(leagues);
    }, )
    return (
        <div>
         <h1>Champions League</h1>
         <h1>leagues: {leagues.length}   </h1>
         {
        //    sliceLeagues.map(sliceleagues => <League></League> )
         }

        </div>
    );
};

export default League;