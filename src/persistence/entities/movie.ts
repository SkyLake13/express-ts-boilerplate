export interface MovieEntity {
    _id: string;
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    num_mflix_comments: number;
    title: string;
    fullplot: string;
    languages: string[];
    released: Date;
    directors: string[];
    rated: string;
    awards: Awards;
    lastupdated: string;
    year: number;
    imdb: Imdb;
    countries: string[];
    type: string;
    tomatoes: Tomatoes;
}

interface Awards {
    wins: number;
    nominations: number;
    text: string;
}

interface Imdb {
    rating: number;
    votes: number;
    id: number;
}

interface Viewer {
    rating: number;
    numReviews: number;
    meter: number;
}

interface Tomatoes {
    viewer: Viewer;
    lastUpdated: Date;
}