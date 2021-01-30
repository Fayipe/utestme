"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllerHandler_1 = require("./../../shared/controllerHandler");
const authController_1 = require("./authController");
const router = express_1.default.Router();
const call = controllerHandler_1.controllerHandler;
const Auth = new authController_1.AuthController();
router.get("/", call(Auth.getUserDetails, (req, res, next) => []));
router.post("/validate-rule", call(Auth.validateRules, (req, res, next) => [req.body]));
exports.AuthRouter = router;
//# sourceMappingURL=authRouter.js.map