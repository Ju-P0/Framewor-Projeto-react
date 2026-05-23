const APIKEY = "8d56f75105db4a71a30b3f8b7502102d";

export const url = `https://api.rawg.io/api/games?key=${APIKEY}&page_size=6`;

export async function chamarAPI(url, setCarregando) {
  setCarregando(true);
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erro:", error);
  } finally {
    setCarregando(false);
  }
}

