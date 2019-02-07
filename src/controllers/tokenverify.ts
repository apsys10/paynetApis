const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');



class TokenVerify
{
    checkJwt = jwt({
        secret: jwksRsa.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `https://paynet.auth0.com/.well-known/jwks.json`
          }),
         issuer: `https://paynet.auth0.com/`,
          algorithms: ['RS256']
        });

constructor()
{
  this.checkJwt;
}

}

const tv = new TokenVerify();


export default tv ;