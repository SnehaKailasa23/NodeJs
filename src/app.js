require("babel-core/register");
require("babel-polyfill");

import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import Server from './server';
import Route from './routes/api';

let fs = require('fs');

(function(){
    
    dotenv.load();
    let server = new Server();
    let app = server.start();
    
    
    app.use(bodyParser.json({ limit: '20mb' })); // support json encoded bodies
    app.use(bodyParser.urlencoded({ limit: '20mb', extended: true })); // support encoded bodies
    app.use(cors({origin:true,credentials: true})); // Enable cors    
    
    //Global error messages
    new Route(app);

    // To generate UUID
    global.uuid = require('uuid/v1');
})();
