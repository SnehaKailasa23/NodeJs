let express = require('express');

require('express-group-routes');
require('module-alias/register')

class Server{
    constructor(){
        this.express = express();
    }

    start(){
        this.express.listen(process.env.PORT_NUMBER,()=>console.log("Server started at "+ process.env.REST_API_URL));
        return this.express;
    }
}

export default Server;
