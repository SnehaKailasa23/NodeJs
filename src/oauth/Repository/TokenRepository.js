`use strict`

var AuthenticationContext = require('adal-node').AuthenticationContext;

class TokenRepository {

    /**
     * Function to get access token with dev account creds to access PowerBI reports
     * @param { Function } callback [call back function]
     */
    generatePowerBIAccessToken(callback) {
        let authorityUrl = process.env.PBI_AUTHORITY_HOST_URL + '/' + process.env.PBI_TENANT_ID;
        let context = new AuthenticationContext(authorityUrl);
        context.acquireTokenWithUsernamePassword(process.env.PBI_RESOURCE,process.env.PBI_USER_NAME, process.env.PBI_PASSWORD,process.env.PBI_APPLICATION_ID, function(err, tokenResponse) {
            if (err) {
                callback(err.stack, null);
            } else {
                callback(null,tokenResponse);
            }
        });
    }
}

export default TokenRepository;
