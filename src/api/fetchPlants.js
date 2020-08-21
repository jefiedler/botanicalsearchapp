export async function fetchPlants() {
    const respons = await fetch("http://localhost:3333/plants/");

    if (!respons.ok){
        throw error;
    }

    const answer = await respons.json();

    return answer;
}