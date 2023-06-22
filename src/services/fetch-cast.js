import axios from 'axios';

const fetchCast = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=b731cf979cf3a21e613725d78e268c7c`;

  try {
    const response = await axios.get(url);

    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchCast;
