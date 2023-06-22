import axios from 'axios';

const fetchTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=b731cf979cf3a21e613725d78e268c7c`;

  try {
    const response = await axios.get(url);
    if (response.data.results.length === 0) {
      throw new Error();
    }

    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchTrendingMovies;
