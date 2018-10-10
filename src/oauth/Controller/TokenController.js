`use strict`

import TokenService from '../Service/TokenService';

export default class TokenController {


     /**
      * Get power bi access token
      * @param { Object } req [Request object]
      * @param { Object } res [Response object]
      * @return { Json } [Reponse token]
      */
     async getPowerBIAccessToken(req, res) {
        ((new TokenService()).getPowerBIAccessToken(function(error, response){
            if(error) {
                res.status(400).send(error);
            } else {
                res.send({accessToken: response.accessToken,workspace: process.env.PBI_WORKSPACE_NAME});
            }
        }));
        
     }
}
