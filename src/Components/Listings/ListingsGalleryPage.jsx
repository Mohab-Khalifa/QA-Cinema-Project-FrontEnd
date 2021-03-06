import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";


const ListingsGalleryPage = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const mapMovieImages = (movie) => {

        const base64Poster = `data:${movie.poster.contentType};base64, ${movie.poster.data}`;
        return (
            <div key={movie.title}>
                <Link to={`/listingsgallery/${movie._id}`}>
                    <img id="movie-poster" src={base64Poster} alt="movie poster" width="250"/>
                </Link>
                <h3 id="movie-listing-title">{movie.title}</h3>
            </div>
        )
    }

    useEffect(() => {
        fetch(`http://localhost:5000/movie`)
            .then(response => {
                if (response.ok) return response.json();
                throw response;
            })
            .then(data => setData(data))
            .catch(error => {
                console.error(error);
                setError(error)
            })
            .finally(() => setLoading(false))
    }, []);

    if (loading) return <main><h1>Loading movies...</h1></main>
    else if (error) return <main><h1>Error loading movies...</h1></main>
    else return (
        <main>
            <h2>Listings Gallery</h2>
            <div class="listings-gallery">
            {data.map(movie => mapMovieImages(movie))}
            </div>
            <Outlet />            
        </main>

            );
};

export default ListingsGalleryPage;