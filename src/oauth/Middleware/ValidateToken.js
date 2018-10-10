`use strict`

import TokenRepository from '../Repository/TokenRepository';

class ValidateToken {

    /**
     * Verify requested token is valid or not
     *
     * @param  { Object }   req  [ Request Object ]
     * @param  { Object }   res  [ Response Object ]
     * @param  { Callback } next [ Callback function ]
     * @return { Object | Callback }  [ Response | Call callback function ]
     */
    static verifyToken(req, res, next) {
        let authorization = req.headers.authorization;
        let token = "";
        if(!authorization){
            res.statusMessage = process.env.OAUTH_MISSING_ACCESS_TOKEN;
            return res.status(400).send({ "message": process.env.OAUTH_MISSING_ACCESS_TOKEN });
        } else {
            let tokenAarray = authorization.split(" ");
            token = tokenAarray[1];
            if(!token) {
                res.statusMessage = process.env.OAUTH_INVALID_ACCESS_TOKEN;
                return res.status(401).send({ "message": process.env.OAUTH_INVALID_ACCESS_TOKEN });
            }
        }

        (new TokenRepository()).validateToken(token).then((response) => {
            if(response.length <= 0){
                res.statusMessage = process.env.OAUTH_INVALID_ACCESS_TOKEN;
                return res.status(401).send({ "message": process.env.OAUTH_INVALID_ACCESS_TOKEN });
            }

            return next();

        }, (error) => {
            return res.send(error);
        });
    }
}

export default ValidateToken;
