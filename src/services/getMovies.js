import axios from "axios";

const URL_API = "https://api.themoviedb.org/3/movie/now_playing";
const API_KEY = "548ce1cfcd2f3996b16315e0bee2b687";

export const getMovies = async () => {
  try {
    const { data } = await axios.get(
      `${URL_API}?api_key=${API_KEY}&language=es-ES`
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
