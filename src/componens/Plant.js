import React from 'react';

function Plant({plant}) {
    

    console.log(plant);

    return (
        <div>
            {/* <img href={plant.plantImg} alt={plant.species} /> */}
            <h2>{plant.germanName}</h2>
            <p>{plant.species}</p>
        </div>
    );
}

export default Plant;