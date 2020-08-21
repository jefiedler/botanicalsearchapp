import React from 'react';
import { useQuery } from 'react-query';
import { fetchPlants } from '../api/apiPlants';
import Plant from './Plant';


function ListContent() {
    const {data, status} = useQuery('plant', fetchPlants);


    return (
        <>
        <main>
            {status === "loading" && <div>Loading...</div>}
            {data?.map((plants) => (
                <Plant key={plants.id} plant={plants} /> 
            ))}
            {status === "error" && <div>Api is not available at the moment</div>}
        </main>
        </>
    );
}

export default ListContent;