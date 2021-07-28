export interface Comment {
    id: string,
    name: string;
    email: string;
    movie_id: string;
    text: string;
    date: Date;
}

export interface NewComment {
    email: string;
    movie_id: string;
    text: string;
}