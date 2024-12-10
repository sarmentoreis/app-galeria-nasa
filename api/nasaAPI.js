import axios from "axios";

const BASE_URL = "https://images-api.nasa.gov/search";

const nasaAPI = {
  async getImages(astro, pagina) {
    try {
      const response = await axios.get(`${BASE_URL}?q=${astro}&page=${pagina}`);
      return response.data.value;
    } catch (error) {
      console.error("Erro ao obter a lista de imagens:", error);
      throw error;
    }
  },
};

export default nasaAPI;
