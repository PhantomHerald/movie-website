function Moveicard({ movie }) {
    function onLike() {
        alert("You liked this movie");
    }
    return (
        <div className="movie-card">
            <div className="movieimage">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-title">
                    <button className="favorite" onClick={onLike}>❤️</button>
                </div>
            </div>
            <div className="movieinfo">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    );
}
export default Moveicard;