import { Model } from "mongoose";
import { MovieEntity } from "../persistence/entities";

export class MovieService {

    constructor(private readonly movie: Model<MovieEntity>) {

    }

    public async getMovies() {
        const movies = await this.movie.find().limit(100);
        return movies;
    }
}
