import express from "express";
import * as bodyParser from "body-parser";
import cors from 'cors';
import ValueService from "./services/value.service";
import ValueController from "./controllers/value.controller";

// import { authorization } from "./auth";

class App {
    public express: express.Application;
    private valueService!: ValueService;

    constructor() {
        this.express = express();
        this.middleWares();
        this.serviceFactory();
        this.routes();
    }

    private middleWares(): void {
        //this.express.use(authorization);
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.express.use(express.static('public'));
        this.express.use(cors({ origin: true }));   
    }

    private routes(): void {
        this.express.use('/', new ValueController(this.valueService).router);
    }

    private serviceFactory() {
        this.valueService = new ValueService();
    }
}

export const expressApp = new App().express;