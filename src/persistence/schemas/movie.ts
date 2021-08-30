import { Schema } from 'mongoose';
import { MovieModel } from '../models';

export const movieSchema = new Schema<MovieModel> ({
    plot: {
        type: String
    },
    genres: {
        type: [String]
    },
    runtime: {
        type: Number
    },
    cast: {
        type: [String]
    },
    num_mflix_comments: {
        type: Number
    },
    title: {
        type: String
    },
    fullplot: {
        type: String
    },
    languages: {
        type: [String]
    },
    released: {
        type: Date
    },
    directors: {
        type: [String]
    },
    rated:  {
        type: String
    },
    awards: {
        wins:  {
            type: Number
        },
        nominations:  {
            type: Number
        },
        text: {
            type: String
        }
    },
    lastupdated:  {
        type: String
    },
    year:  {
        type: Number
    },
    imdb: {
        rating: {
            type: Number
        },
        votes: {
            type: Number
        },
        id: {
            type: Number
        },
    },
    countries: {
        type: [String]
    },
    type: {
        type: String
    },
    tomatoes: {
        viewer: {
            rating: {
                type: Number
            },
            numReviews: {
                type: Number
            },
            meter: {
                type: Number
            }
        },
        lastUpdated: {
            type: Date
        }
    }
});
