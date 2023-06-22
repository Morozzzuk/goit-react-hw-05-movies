import axios from 'axios';

const fetchReviews = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=b731cf979cf3a21e613725d78e268c7c`;

  try {
    const response = await axios.get(url);

    if (!response.data.results) {
      throw new Error();
    }
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchReviews;
