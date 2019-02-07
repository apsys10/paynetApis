import * as bodyParser from 'body-parser';
import * as express from 'express';
import PostGetRouter from './routes/PostGetRouter';
import tv from './controllers/tokenverify';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config()
  {
this.app.use(bodyParser.json());
this.app.use(bodyParser.urlencoded({extended: true}));

  }

  public routes(): void
  {
let router: express.Router;
router = express.Router();
//this.app.use('/' , router);
this.app.use('/' , tv.checkJwt ,PostGetRouter)


  }
}
export default new Server().app;







// import express = require('express');

// // Create a new express application instance
// const app: express.Application = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });