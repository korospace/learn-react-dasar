
function MovieCard({ movies }) {

    const MOVIE_IMG_BASEURL = process.env.REACT_APP_APIURL_MOVIE_IMG;

    return movies.map((movie,i) => {
        return (
            <div className="movie-card" key={i}>
                <img src={MOVIE_IMG_BASEURL+movie.poster_path} alt="" />
                <div className="movie-card-title">{ movie.title }</div>
                <div className="movie-card-desc">
                    <div className="movie-card-release">{ movie.release_date }</div>
                    <div className="movie-card-rating">{ movie.vote_average }</div>
                </div>
            </div>
        )
    })
}

export default MovieCard;