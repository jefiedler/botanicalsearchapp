require("dotenv").config({ path: "././data.env" });

const access = { apiKey: process.env.API_KEY };

export async function fetchApiData() {
  const response = await fetch(
    `https://trefle.io/api/v1/plants/search?token=${access}&q=apple`
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const answer = await response.json();

  console.log(answer);

  return answer;
}
