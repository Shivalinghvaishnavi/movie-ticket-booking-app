import {
  nowPlayingMovie,
  upcomingMovie,
  popularMovies,
  searchMovies,
} from '../api/apiCalls';
import axios from 'axios';
export const getUpcomingMoviesList = async () => {
  try {
    const response = await axios.get(upcomingMovie);
    return response.data;
  } catch (error) {
    console.log(
      'Something went wrong in getUpcomingMoviesList function',
      error,
    );
  }
};
export const getNowPlayingMoviesList = async () => {
  try {
    const response = await axios.get(nowPlayingMovie);
    return response.data;
  } catch (error) {
    console.log(
      'Something went wrong in getUpcomingMoviesList function',
      error,
    );
  }
};
export const getPopularMoviesList = async () => {
  try {
    const response = await axios.get(popularMovies);
    return response.data;
  } catch (error) {
    console.log(
      'Something went wrong in getUpcomingMoviesList function',
      error,
    );
  }
};

export const getSearchResultMovies = async (query: string) => {
  try {
    const response = await axios.get(searchMovies(query));
    return response.data;
  } catch (error) {
    console.log(
      'Something went wrong in getUpcomingMoviesList function',
      error,
    );
  }
};
