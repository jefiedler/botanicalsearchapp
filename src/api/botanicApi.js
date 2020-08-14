require("dotenv").config();

export async function fetchApiData() {
  const api_Key = process.env.API_KEY;
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=${api_Key}&q=apple`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const answer = await response.json();
  const plants = answer.data.map((plant) => ({
    latName: plant.scientific_name,
    normalName: plant.common_name,
    synonymName: plant.image_url,
    plantId: plant.id,
  }));
  return plants;
}
