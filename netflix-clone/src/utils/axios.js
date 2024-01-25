import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// https://api.themoviedb.org/3/discover/tv?api_key=d977e8afa407db36db8663b8d5406dc7&with_networks=213