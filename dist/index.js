"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server = require("http");
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const logger_1 = require("./utils/logger");
const port = config_1.PORT || 3000;
const http = new server.Server(app_1.default);
http.listen(port, () => {
    logger_1.logger.info(`Started server on port: ${port}`);
});
//# sourceMappingURL=index.js.map