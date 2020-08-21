import React from 'react';

function Plant({plant}) {
    

    console.log(plant);

    return (
        <div>
            <h2>{plant.GermanName}</h2>
            <p>{plant.Species}</p>
        </div>
    );
}

export default Plant;