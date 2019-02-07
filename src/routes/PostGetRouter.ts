import { Router , Request , Response , NextFunction} from 'express';
import db from '../db';



class PostGetRouter {

    router: Router = Router();

    constructor(){
     
        this.routes();
    }
  
routes()
{

this.router.post('/signup' ,this.controlSignUp );
this.router.get('/user', this.getUserById);
this.router.get('/users', this.getAllUsers);

}


public controlSignUp (req: Request , res: Response , next: NextFunction)
{

    db.none('insert into user_info(username, email, uniqueId,email_verified)' +
    'values(${username}, ${email},${uniqueId} ,${email_verified})', req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted user'
          });
      })
      .catch(function (err: any) {
        return next(err);
      });



}

public getAllUsers = (req: Request , res: Response ,next: NextFunction)=>
{
  db.any('select * from user_info')
  .then(function (data: any) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved ALL users'
      });
  })
  .catch(function (err:any) {
    return next(err);
  });
}

public getUserById = (req: Request ,res: Response , next: NextFunction) =>
{
 let id = parseInt(req.query.userId)
  db.one('select * from user_info where id = $1', id)
    .then(function (data:any) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err:any) {
      return next(err);
    });
}




}


const pgRoutes = new PostGetRouter();
pgRoutes.routes();

export default pgRoutes.router;

