import axios from "axios";

const MOVIE_APIURL = process.env.REACT_APP_APIURL_MOVIE;
const MOVIE_APIKEY = process.env.REACT_APP_APIURL_MOVIE_KEY;

export const getMovieByCategory = async (category) => {

    return axios.get(`${MOVIE_APIURL}/movie/${category}?api_key=${MOVIE_APIKEY}`)
    .then((response) => {
        return response.data.results
    })
    .catch(() => {})
        
}

export const getMovieByKeyword = async (keyword) => {
    return axios.get(`${MOVIE_APIURL}/search/movie?api_key=${MOVIE_APIKEY}&query=${keyword}`)
        .then((response) => {
            return response.data.results
        })
        .catch(() => {})
}
