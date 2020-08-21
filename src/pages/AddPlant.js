import React from 'react';
import HeaderAddPlants from '../componens/headers/HeaderAddPlants';
import { useMutation } from 'react-query';
import { postPlants } from '../api/apiPlants';

function AddPlant() {
    const [genus, setGenus] = React.useState("");
    const [species, setSpecies] = React.useState("");
    const [germanName, setGermanName] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [data, setData] = React.useState({});

    // function handleSubmit(){
    //     const [addPlant] = useMutation(postPlants);

    // }




    return (
        <>
            <HeaderAddPlants/>
            <form >
                <label>Genus: <input type="text" value={genus} onChange={(event) => setGenus(event.target.value)}/></label>
                <label>Species: <input type="text" value={species} onChange={(event)=> setSpecies(event.target.value)}/></label>
                <label>German Name: <input type="text" value={germanName} onChange={(event)=> setGermanName(event.target.value)}/></label>
                <input type="submit" value="New Plant" disabled={!genus || !species || !germanName || loading}/>
            </form>
        </>
    );
}

export default AddPlant;

//Style

