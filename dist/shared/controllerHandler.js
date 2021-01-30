"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerHandler = void 0;
/**
 * Handles controller execution and responds to user (API Express version).
 * @param promise Controller Promise. I.e. ControllerInstance().getUser.
 * @param params A function (req, res, next), all of which are optional
 * that maps our desired controller parameters. I.e. (req) => [req.params.username, ...].
 */
// tslint:disable-next-line:ban-types
exports.controllerHandler = (promise, params) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const boundParams = params ? params(req, res, next) : [];
        try {
            const result = yield promise(...boundParams);
            return res.status(result.statusCode).json({
                status: result.status,
                data: result.data,
                message: result.message,
            });
        }
        catch (error) {
            next(error);
        }
    });
};
//# sourceMappingURL=controllerHandler.js.map