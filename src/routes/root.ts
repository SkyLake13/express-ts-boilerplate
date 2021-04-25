import express from 'express';


const root = express.Router();

root.get('/', (_req, res) => {
    return res.status(200).send('Hello there!!!');
});


export default root;