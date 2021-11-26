import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
function MovieCard({ movie }) {
	const imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
	return (
		<li className="moviecard">
			<Link to={"/movies/" + movie.id}>
				<img className="moviecard-image" src={imgUrl} alt={movie.title} />
				<h4>{movie.title}</h4>
			</Link>
		</li>
	);
}

export { MovieCard };
