import { IMovie as MovieContract } from "../domain-contracts/movie";
import { Movie } from "../persistence";

export async function getMovies() {
    const movies = await Movie.find();

    return movies.map((m) => ({
        ...m
    }) as MovieContract);
}