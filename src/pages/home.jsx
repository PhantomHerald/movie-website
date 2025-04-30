import Moveicard from "../componets/moveicard";
import { useState } from "react";

function Home() {
    const [search, setSearch] = useState("");

    const movies = [
        { id: 1, title: "Terminator", releaseDate: "2025", url: "https://via.placeholder.com/150" },
        { id: 2, title: "Terminator 2", releaseDate: "2027", url: "https://via.placeholder.com/150" },
        { id: 3, title: "John Wick", releaseDate: "2028", url: "https://via.placeholder.com/150" },
        { id: 4, title: "John Wick 2", releaseDate: "2029", url: "https://via.placeholder.com/150" },
        { id: 5, title: "The Matrix", releaseDate: "2030", url: "https://via.placeholder.com/150" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(search);
        setSearch("");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="searchbutton">Search</button>
            </form>
            <div className="moviesgrid">
                {movies.map((movie) => 
                    <Moveicard movie={movie} key={movie.id} />
                )}
            </div>
        </div>
    );
}

export default Home;