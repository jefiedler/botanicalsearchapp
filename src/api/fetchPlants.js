export async function fetchPlants() {
    const respons = await fetch("http://localhost:3333/plants/");

    if (!respons.ok){
        throw new Error(Error);
    }

    const plants = await respons.json();

    return plants;
}