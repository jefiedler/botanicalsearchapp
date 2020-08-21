export async function fetchPlants() {
    const respons = await fetch("http://localhost:3333/plants/");

    if (!respons.ok){
        throw new Error(Error);
    }

    const plants = await respons.json();

    return plants;
}

export async function postPlants(plants){
    const respons = await fetch("http://localhost:3333/plants", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(plants)
    });
    if (!respons.ok){
        throw respons;
    }
    const result = await respons.json();

    return result;
}