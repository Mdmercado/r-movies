import React from "react";
import movie from "./movie.json";
import "./MovieDetails.modules.css";

function MovieDetails() {
	const imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;

	return (
		<div className="detailsContainer">
			<img className="col image" src={imgUrl} alt={movie.title} />
			<div className="col movieInfo">
				<p className="firstItem">
					{" "}
					<strong>Title: </strong>
					{movie.title}
				</p>
				<p><strong>Genres: </strong>{movie.genres.map((gen) => gen.name).join(", ")}</p>
				<p>
					<strong>Description: </strong> {movie.overview}
				</p>
			</div>
		</div>
	);
}

export { MovieDetails };
