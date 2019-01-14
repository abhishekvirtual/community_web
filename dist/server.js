/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./buildScripts/controllers/api/post/postController.ts":
/*!*************************************************************!*\
  !*** ./buildScripts/controllers/api/post/postController.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __webpack_require__(/*! express */ "express");
var post_1 = __webpack_require__(/*! ../../../models/post */ "./buildScripts/models/post.ts");
var PostController = (function () {
    function PostController() {
        this.router = express_1.Router();
        this.routes();
    }
    PostController.prototype.all = function (_, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, post_1.Post.find()];
                    case 1:
                        data = _a.sent();
                        return [2, res.status(200).json({ data: data, message: 'success' })];
                    case 2:
                        error_1 = _a.sent();
                        next(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    PostController.prototype.one = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var slug, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slug = req.params.slug;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, post_1.Post.findOne({ slug: slug })];
                    case 2:
                        data = _a.sent();
                        if (!data) {
                            throw new Error('Post not found');
                        }
                        return [2, res.status(200).json({ data: data, message: 'success' })];
                    case 3:
                        error_2 = _a.sent();
                        return [2, next(error_2.message)];
                    case 4: return [2];
                }
            });
        });
    };
    PostController.prototype.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, title, slug, content, featuredImage, category, published, post, data, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, title = _a.title, slug = _a.slug, content = _a.content, featuredImage = _a.featuredImage, category = _a.category, published = _a.published;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4, new post_1.Post({
                                title: title,
                                slug: slug,
                                content: content,
                                featuredImage: featuredImage,
                                category: category,
                                published: published,
                            })];
                    case 2:
                        post = _b.sent();
                        return [4, post.save()];
                    case 3:
                        data = _b.sent();
                        res.status(201).json({ data: data, message: 'success' });
                        return [3, 5];
                    case 4:
                        error_3 = _b.sent();
                        return [2, next(error_3.message)];
                    case 5: return [2];
                }
            });
        });
    };
    PostController.prototype.update = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var slug, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slug = req.body.slug;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, post_1.Post.findOneAndUpdate({ slug: slug }, req.body)];
                    case 2:
                        data = _a.sent();
                        res.status(200).json({ data: data, message: 'success' });
                        return [3, 4];
                    case 3:
                        error_4 = _a.sent();
                        return [2, next(error_4.message)];
                    case 4: return [2];
                }
            });
        });
    };
    PostController.prototype.delete = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var slug, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        slug = req.body.slug;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, post_1.Post.findOneAndRemove({ slug: slug })];
                    case 2:
                        data = _a.sent();
                        return [2, res.status(204).json({ data: data, message: 'success' })];
                    case 3:
                        error_5 = _a.sent();
                        return [2, next(error_5.message)];
                    case 4: return [2];
                }
            });
        });
    };
    PostController.prototype.routes = function () {
        this.router.get('/', this.all);
        this.router.get('/:slug', this.one);
        this.router.post('/', this.create);
        this.router.put('/:slug', this.update);
        this.router.delete('/:slug', this.delete);
    };
    return PostController;
}());
exports.default = { PostController: PostController };


/***/ }),

/***/ "./buildScripts/index.ts":
/*!*******************************!*\
  !*** ./buildScripts/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var debug = __webpack_require__(/*! debug */ "debug");
var http = __webpack_require__(/*! http */ "http");
var srcServer_1 = __webpack_require__(/*! ./srcServer */ "./buildScripts/srcServer.ts");
var port = normalizePort(process.env.PORT || 3000);
srcServer_1.default.set('port', port);
console.log("Server listening on port " + port);
var server = http.createServer(srcServer_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    var port = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    }
    else if (port >= 0) {
        return port;
    }
    else {
        return false;
    }
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
}


/***/ }),

/***/ "./buildScripts/models/post.ts":
/*!*************************************!*\
  !*** ./buildScripts/models/post.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
var PostSchema = new mongoose_1.Schema({
    createdAt: Date,
    updatedAt: Date,
    title: String,
    slug: String,
    content: String,
    featuredImage: String,
    category: String,
    published: Boolean,
});
exports.Post = mongoose_1.model('Post', PostSchema);


/***/ }),

/***/ "./buildScripts/router/router.ts":
/*!***************************************!*\
  !*** ./buildScripts/router/router.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = __webpack_require__(/*! express */ "express");
var path = __webpack_require__(/*! path */ "path");
var fs = __webpack_require__(/*! fs */ "fs");
var Router = (function () {
    function Router() {
        this.baseFolder = null;
    }
    Router.prototype.load = function (app, folderName) {
        var _this = this;
        if (!this.baseFolder)
            this.baseFolder = path.basename(folderName);
        fs.readdirSync(folderName).forEach(function (file) {
            var fullName = path.join(folderName, file);
            var stat = fs.lstatSync(fullName);
            console.log('here we go ' + "....." + fullName);
            if (stat.isDirectory()) {
                _this.load(app, fullName);
            }
            else if (file.toLowerCase().indexOf('.js')) {
                var dirs = path.dirname(fullName).split(path.sep);
                console.log(dirs);
                if (dirs[0].toLowerCase() === _this.baseFolder.toLowerCase()) {
                    dirs.splice(0, 1);
                }
                var router = express.Router();
                var baseRoute = '/' + dirs.join('/');
                console.log('Created route: ' + baseRoute + ' for ' + fullName);
                var controllerClass = __webpack_require__(/*! ../controllers/api/post/postController */ "./buildScripts/controllers/api/post/postController.ts");
                var controller = new controllerClass(router);
                console.log(controller);
                app.use(baseRoute, router);
            }
        });
    };
    ;
    return Router;
}());
exports.Router = Router;
var routes = new Router();
exports.routes = routes;


/***/ }),

/***/ "./buildScripts/srcServer.ts":
/*!***********************************!*\
  !*** ./buildScripts/srcServer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var compression = __webpack_require__(/*! compression */ "compression");
var cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
var cors = __webpack_require__(/*! cors */ "cors");
var express = __webpack_require__(/*! express */ "express");
var helmet = __webpack_require__(/*! helmet */ "helmet");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
var logger = __webpack_require__(/*! morgan */ "morgan");
var Router = __webpack_require__(/*! ./router/router */ "./buildScripts/router/router.ts");
var path = __webpack_require__(/*! path */ "path");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.initRoutes();
    }
    Server.prototype.config = function () {
        var MONGO_URI = 'mongodb://localhost/tes';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI, { useNewUrlParser: true });
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(function (_, res, next) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    };
    Server.prototype.initRoutes = function () {
        var folder_path = path.resolve('buildScripts/controllers');
        Router.routes.load(this.app, folder_path);
        this.app.all('/*', function (req, res) {
            res.sendFile(path.resolve('buildscripts/public/index.html'));
        });
    };
    return Server;
}());
exports.default = new Server().app;


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./buildScripts/index ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\vscodeWorkSpace\community_web\buildScripts\index */"./buildScripts/index.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL2NvbnRyb2xsZXJzL2FwaS9wb3N0L3Bvc3RDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL2J1aWxkU2NyaXB0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9idWlsZFNjcmlwdHMvbW9kZWxzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRTY3JpcHRzL3NyY1NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FB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QUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsYUFBQztBQUFELENBQUM7QUFFRCxrQkFBZSxJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RoQyx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSwgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Bvc3QnO1xuXG4gY2xhc3MgUG9zdENvbnRyb2xsZXIge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcbiAgICB0aGlzLnJvdXRlcygpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGFsbChcbiAgICBfOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdC5maW5kKCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG5leHQoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvbmUoXG4gICAgcmVxOiBSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2UsXG4gICAgbmV4dDogTmV4dEZ1bmN0aW9uLFxuICApOiBQcm9taXNlPFJlc3BvbnNlIHwgdm9pZD4ge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcmVxLnBhcmFtcztcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFBvc3QuZmluZE9uZSh7IHNsdWcgfSk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3N0IG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgY3JlYXRlKFxuICAgIHJlcTogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHNsdWcsXG4gICAgICBjb250ZW50LFxuICAgICAgZmVhdHVyZWRJbWFnZSxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgcHVibGlzaGVkLFxuICAgIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IG5ldyBQb3N0KHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHNsdWcsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGZlYXR1cmVkSW1hZ2UsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBwdWJsaXNoZWQsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBwb3N0LnNhdmUoKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YSwgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlKFxuICAgIHJlcTogUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlLFxuICAgIG5leHQ6IE5leHRGdW5jdGlvbixcbiAgKTogUHJvbWlzZTxSZXNwb25zZSB8IHZvaWQ+IHtcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5ib2R5O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUG9zdC5maW5kT25lQW5kVXBkYXRlKHsgc2x1ZyB9LCByZXEuYm9keSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEsIG1lc3NhZ2U6ICdzdWNjZXNzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGRlbGV0ZShcbiAgICByZXE6IFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZSxcbiAgICBuZXh0OiBOZXh0RnVuY3Rpb24sXG4gICk6IFByb21pc2U8UmVzcG9uc2UgfCB2b2lkPiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSByZXEuYm9keTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFBvc3QuZmluZE9uZUFuZFJlbW92ZSh7IHNsdWcgfSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDQpLmpzb24oeyBkYXRhLCBtZXNzYWdlOiAnc3VjY2VzcycgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KCcvJywgdGhpcy5hbGwpO1xuICAgIHRoaXMucm91dGVyLmdldCgnLzpzbHVnJywgdGhpcy5vbmUpO1xuICAgIHRoaXMucm91dGVyLnBvc3QoJy8nLCB0aGlzLmNyZWF0ZSk7XG4gICAgdGhpcy5yb3V0ZXIucHV0KCcvOnNsdWcnLCB0aGlzLnVwZGF0ZSk7XG4gICAgdGhpcy5yb3V0ZXIuZGVsZXRlKCcvOnNsdWcnLCB0aGlzLmRlbGV0ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1Bvc3RDb250cm9sbGVyfVxuIiwiLy8gdHNsaW50OmRpc2FibGVcbmltcG9ydCAqIGFzIGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgU2VydmVyIGZyb20gJy4vc3JjU2VydmVyJztcblxuLy9kZWJ1ZygndHMtZXhwcmVzczpzZXJ2ZXInKTtcblxuY29uc3QgcG9ydCA9IG5vcm1hbGl6ZVBvcnQocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcblxuXG5TZXJ2ZXIuc2V0KCdwb3J0JywgcG9ydCk7XG5cbmNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xuXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihTZXJ2ZXIpO1xuc2VydmVyLmxpc3Rlbihwb3J0KTtcbnNlcnZlci5vbignZXJyb3InLCBvbkVycm9yKTtcbnNlcnZlci5vbignbGlzdGVuaW5nJywgb25MaXN0ZW5pbmcpO1xuXG5mdW5jdGlvbiBub3JtYWxpemVQb3J0KHZhbDogbnVtYmVyIHwgc3RyaW5nKTogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGNvbnN0IHBvcnQ6IG51bWJlciA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQodmFsLCAxMCkgOiB2YWw7XG4gIGlmIChpc05hTihwb3J0KSkge1xuICAgIHJldHVybiB2YWw7XG4gIH0gZWxzZSBpZiAocG9ydCA+PSAwKSB7XG4gICAgcmV0dXJuIHBvcnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3I6IE5vZGVKUy5FcnJub0V4Y2VwdGlvbik6IHZvaWQge1xuICBpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gJ2xpc3RlbicpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuICBjb25zdCBiaW5kID0gdHlwZW9mIHBvcnQgPT09ICdzdHJpbmcnID8gJ1BpcGUgJyArIHBvcnQgOiAnUG9ydCAnICsgcG9ydDtcbiAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgY2FzZSAnRUFDQ0VTJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc2ApO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRUFERFJJTlVTRSc6XG4gICAgICBjb25zb2xlLmVycm9yKGAke2JpbmR9IGlzIGFscmVhZHkgaW4gdXNlYCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25MaXN0ZW5pbmcoKTogdm9pZCB7XG4gIGNvbnN0IGFkZHIgPSBzZXJ2ZXIuYWRkcmVzcygpO1xuICBjb25zdCBiaW5kID0gdHlwZW9mIGFkZHIgPT09ICdzdHJpbmcnID8gYHBpcGUgJHthZGRyfWAgOiBgcG9ydCAke2FkZHIucG9ydH1gO1xuICBkZWJ1ZyhgTGlzdGVuaW5nIG9uICR7YmluZH1gKTtcbn1cbiIsImltcG9ydCB7IG1vZGVsLCBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbi8vIEFsbCB2YWxpZGF0aW9uIHNob3VsZCBiZSBoYW5kbGVkIGluIHRoZSBjb250cm9sbGVyXG4vLyBrZWVwIG1vZGVscyBhcyBtaW5pbWFsIGFuZCBzaW1wbGUgYXMgcG9zc2libGVcblxuY29uc3QgUG9zdFNjaGVtYTogU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGNyZWF0ZWRBdDogRGF0ZSxcbiAgdXBkYXRlZEF0OiBEYXRlLFxuICB0aXRsZTogU3RyaW5nLFxuICBzbHVnOiBTdHJpbmcsXG4gIGNvbnRlbnQ6IFN0cmluZyxcbiAgZmVhdHVyZWRJbWFnZTogU3RyaW5nLFxuICBjYXRlZ29yeTogU3RyaW5nLFxuICBwdWJsaXNoZWQ6IEJvb2xlYW4sXG59KTtcblxuZXhwb3J0IGNvbnN0IFBvc3QgPSBtb2RlbCgnUG9zdCcsIFBvc3RTY2hlbWEpO1xuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuXG4gICAgcHVibGljIGJhc2VGb2xkZXI6c3RyaW5nIDtcbiAgICBwdWJsaWMgYXBwOmV4cHJlc3MuQXBwbGljYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuYmFzZUZvbGRlciA9IG51bGw7XG4gICAgfVxuXG4gICAgLy9DYWxsZWQgb25jZSBkdXJpbmcgaW5pdGlhbCBzZXJ2ZXIgc3RhcnR1cFxuICAgbG9hZChhcHA6ZXhwcmVzcy5BcHBsaWNhdGlvbiwgZm9sZGVyTmFtZTpzdHJpbmcpIHtcblxuICAgICAgaWYgKCF0aGlzLmJhc2VGb2xkZXIpIHRoaXMuYmFzZUZvbGRlciA9IHBhdGguYmFzZW5hbWUoZm9sZGVyTmFtZSk7XG5cbiAgICAgIGZzLnJlYWRkaXJTeW5jKGZvbGRlck5hbWUpLmZvckVhY2goKGZpbGUpID0+IHtcblxuICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lID0gcGF0aC5qb2luKGZvbGRlck5hbWUsIGZpbGUpO1xuICAgICAgICAgIGNvbnN0IHN0YXQgPSBmcy5sc3RhdFN5bmMoZnVsbE5hbWUpO1xuICAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZSB3ZSBnbyAnK1wiLi4uLi5cIitmdWxsTmFtZSk7XG4gICAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAvL1JlY3Vyc2l2ZWx5IHdhbGstdGhyb3VnaCBmb2xkZXJzXG4gICAgICAgICAgICAgIHRoaXMubG9hZChhcHAsIGZ1bGxOYW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZpbGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCcuanMnKSkge1xuICAgICAgICAgICAgICAvL0dyYWIgcGF0aCB0byBKYXZhU2NyaXB0IGZpbGUgYW5kIHVzZSBpdCB0byBjb25zdHJ1Y3QgdGhlIHJvdXRlXG4gICAgICAgICAgICAgIGxldCBkaXJzID0gcGF0aC5kaXJuYW1lKGZ1bGxOYW1lKS5zcGxpdChwYXRoLnNlcCk7XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGlycyk7XG4gICAgICAgICAgICAgIGlmIChkaXJzWzBdLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuYmFzZUZvbGRlci50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICBkaXJzLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG4gICAgICAgICAgICAgIC8vR2VuZXJhdGUgdGhlIHJvdXRlXG4gICAgICAgICAgICAgIGNvbnN0IGJhc2VSb3V0ZSA9ICcvJyArIGRpcnMuam9pbignLycpO1xuXG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgcm91dGU6ICcgKyBiYXNlUm91dGUgKyAnIGZvciAnICsgZnVsbE5hbWUpO1xuXG4gICAgICAgICAgICAgIC8vTG9hZCB0aGUgSmF2YVNjcmlwdCBmaWxlIChcImNvbnRyb2xsZXJcIikgYW5kIHBhc3MgdGhlIHJvdXRlciB0byBpdFxuICAgICAgICAgICAgICBjb25zdCBjb250cm9sbGVyQ2xhc3MgPSByZXF1aXJlKFwiLi4vY29udHJvbGxlcnMvYXBpL3Bvc3QvcG9zdENvbnRyb2xsZXJcIik7XG5cblxuXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgY29udHJvbGxlckNsYXNzKHJvdXRlcik7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAvL0Fzc29jaWF0ZSB0aGUgcm91dGUgd2l0aCB0aGUgcm91dGVyXG4gICAgICAgICAgICAgIGFwcC51c2UoYmFzZVJvdXRlLCByb3V0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG59XG5cbmNvbnN0IHJvdXRlcyA9IG5ldyBSb3V0ZXIoKTtcblxuZXhwb3J0IHtyb3V0ZXN9XG4iLCJpbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCAqIGFzIGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycyc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgKiBhcyBsb2dnZXIgZnJvbSAnbW9yZ2FuJztcbmltcG9ydCAqIGFzIFJvdXRlciBmcm9tICcuL3JvdXRlci9yb3V0ZXInO1xuaW1wb3J0ICogYXMgZXZuY29uZiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuXG5cblxuY2xhc3MgU2VydmVyIHtcbiAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcHAgPSBleHByZXNzKCk7XG4gICAgdGhpcy5jb25maWcoKTtcbiAgICB0aGlzLmluaXRSb3V0ZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgTU9OR09fVVJJOiBzdHJpbmcgPSAnbW9uZ29kYjovL2xvY2FsaG9zdC90ZXMnO1xuICAgIG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJJIHx8IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbiAgICB0aGlzLmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG4gICAgdGhpcy5hcHAudXNlKGxvZ2dlcignZGV2JykpO1xuICAgIHRoaXMuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcbiAgICB0aGlzLmFwcC51c2UoaGVsbWV0KCkpO1xuICAgIHRoaXMuYXBwLnVzZShjb3JzKCkpO1xuXG4gICAgdGhpcy5hcHAudXNlKChfLCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyk7XG4gICAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsXG4gICAgICAgICdHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TJyxcbiAgICAgICk7XG4gICAgICByZXMuaGVhZGVyKFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsXG4gICAgICAgICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBdXRob3JpemF0aW9uLCBBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscycsXG4gICAgICApO1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnLCAndHJ1ZScpO1xuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGluaXRSb3V0ZXMoKSB7XG4gICAgbGV0IGZvbGRlcl9wYXRoOnN0cmluZyA9cGF0aC5yZXNvbHZlKCdidWlsZFNjcmlwdHMvY29udHJvbGxlcnMnKTtcbiAgICBSb3V0ZXIucm91dGVzLmxvYWQodGhpcy5hcHAsZm9sZGVyX3BhdGgpO1xuICAgIC8vIHJlZGlyZWN0IGFsbCBvdGhlcnMgdG8gdGhlIGluZGV4IChIVE1MNSBoaXN0b3J5KVxuICAgIHRoaXMuYXBwLmFsbCgnLyonLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZSgnYnVpbGRzY3JpcHRzL3B1YmxpYy9pbmRleC5odG1sJykpO1xuICAgIH0pO1xufVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmVyKCkuYXBwO1xuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhlbG1ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=