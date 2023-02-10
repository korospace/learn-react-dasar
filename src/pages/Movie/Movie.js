import { useEffect, useState } from "react";
import { getMovieByCategory, getMovieByKeyword } from "./js-movie";

// Styling
import './css-movie.css'

// Components
import Navbar     from "../../components/Navbar";
import Title      from "../../components/Title/Title";
import MovieCard  from "./MovieCard";
import imgLoading from '../../assets/loading.svg'

function Movie() {
    const [showLoading,setShowLoading] = useState(false);
    const [movies,setMovies]           = useState([]);

    useEffect(
        () => {
            getMovieByCategory('popular').then((data) => {
                setMovies(data);
            });
        },
        []
    )

    async function searchMovie(keyword) {
        let data = "";
        setShowLoading(true);

        if (keyword === "") {
            data = await getMovieByCategory('popular');
        } else {
            data = await getMovieByKeyword(keyword);
        }

        setMovies(data);
        setShowLoading(false);
    }

    return (
        <div className="movie-page">
            <Navbar />
            <Title data="Koro Movie App" />

            <div className="movie-search-wraper">
                <input 
                    type="text" placeholder="cari film . . ."
                    className="movie-search"
                    onChange={( {target} ) => searchMovie(target.value)} />
                
                { showLoading ? (<img src={imgLoading} alt="" />) : ''}
            </div>

            <div className="movie-card-container">
                <MovieCard movies={movies} />
            </div>
        </div>
    )
}

export default Movie;