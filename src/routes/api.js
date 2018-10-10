`use strict`

import TokenController from '../oauth/Controller/TokenController';

class Routes {
    constructor(app) {
        this.tokenController = new TokenController();
        this.init(app);
    }
    
    init(app) {
        app.group('/api', (router) => {
            router.get('/token-powerbi', this.tokenController.getPowerBIAccessToken);
        });
    }
}

export default Routes;
