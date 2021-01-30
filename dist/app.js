"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const logger_1 = require("./utils/logger");
const Auth_1 = require("./api/Auth");
class App {
    constructor() {
        this.express = express_1.default();
        this.basePath = "";
        this.boot();
    }
    boot() {
        this.registerMiddlewares();
        this.mountRoutes();
        this.handleUncaughtErrorEvents();
    }
    mountRoutes() {
        this.express.use(`${this.basePath}`, Auth_1.AuthRouter);
    }
    registerMiddlewares() {
        middleware_1.global(this.express);
    }
    // Error handlers
    handleUncaughtErrorEvents() {
        process.on("unhandledRejection", (reason, promise) => {
            throw reason;
        });
        process.on("uncaughtException", (error) => {
            logger_1.logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
            process.exit(1);
        });
        process.on("SIGINT", () => {
            logger_1.logger.info(" Alright! Bye bye!");
            process.exit();
        });
        this.express.use(middleware_1.errorHandler);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map