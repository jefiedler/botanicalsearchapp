export async function fetchApiData() {
  const api_Key = process.env.REACT_APP_BOTANICAL_API_KEY;

  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=${api_Key}&q=lavandula`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const answer = await response.json();
  const plants = answer.data.map((plant) => ({
    species: plant.scientific_name,
    name: plant.common_name,
    family: plant.family,
    genus: plant.genus,
    imgSrc: plant.image_url,
    plantId: plant.id,
  }));
  return plants;
}
