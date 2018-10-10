`use strict`

import TokenRepository from '../Repository/TokenRepository';

class TokenService {

    constructor() {
        this.tokenRepository = new TokenRepository();
    }

    /**
     * Get power bi access token
     * @param { Function } callback  [Call back function]
     */
    async getPowerBIAccessToken(callback) {
        return this.tokenRepository.generatePowerBIAccessToken(callback);
    }
}

export default TokenService;
