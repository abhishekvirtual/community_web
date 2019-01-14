import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';

export class Router {

    public baseFolder:string ;
    public app:express.Application;

    constructor() {
      this.baseFolder = null;
    }

    //Called once during initial server startup
   load(app:express.Application, folderName:string) {

      if (!this.baseFolder) this.baseFolder = path.basename(folderName);

      fs.readdirSync(folderName).forEach((file) => {

          const fullName = path.join(folderName, file);
          const stat = fs.lstatSync(fullName);
           console.log('here we go '+"....."+fullName);
          if (stat.isDirectory()) {
              //Recursively walk-through folders
              this.load(app, fullName);
          } else if (file.toLowerCase().indexOf('.js')) {
              //Grab path to JavaScript file and use it to construct the route
              let dirs = path.dirname(fullName).split(path.sep);

              console.log(dirs);
              if (dirs[0].toLowerCase() === this.baseFolder.toLowerCase()) {
                  dirs.splice(0, 1);
              }

              const router = express.Router();
              //Generate the route
              const baseRoute = '/' + dirs.join('/');


              console.log('Created route: ' + baseRoute + ' for ' + fullName);

              //Load the JavaScript file ("controller") and pass the router to it
              const controllerClass = require("../controllers/api/post/postController");



              const controller = new controllerClass(router);
              console.log(controller);
              //Associate the route with the router
              app.use(baseRoute, router);
          }
      });
    };
}

const routes = new Router();

export {routes}
