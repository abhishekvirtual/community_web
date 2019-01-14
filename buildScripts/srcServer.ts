import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as Router from './router/router';
import * as evnconf from 'dotenv';
import * as path from 'path'

import { PostController } from './controllers/api/post/postController';
import { UserController } from './controllers/api/user/userController';

const postRouter = new PostController();
const userRouter = new UserController();


class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.initRoutes();
  }

  public config(): void {
    const MONGO_URI: string = 'mongodb://localhost/tes';
    mongoose.connect(MONGO_URI || process.env.MONGODB_URI,{ useNewUrlParser: true });

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());

    this.app.use((_, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS',
      );
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });
  }

  public initRoutes() {
    let folder_path:string = './controllers';

    Router.routes.load(this.app,folder_path);
    // redirect all others to the index (HTML5 history)
    this.app.all('/*', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
}
}

export default new Server().app;


