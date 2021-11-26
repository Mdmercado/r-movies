import React from "react";
import movies from "../movies.json";
import { MovieCard } from "./MovieCard";
import './MoviesGrid.css'

function MoviesGrid() {
	return (
		<ul className="moviesgrid">
			{movies.map((peli) => {
				return (
					<MovieCard key={peli.id} movie={peli}/>
				);
			})}
		</ul>
	);
}

export { MoviesGrid };
