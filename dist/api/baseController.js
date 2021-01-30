"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    sendResponse(data, message = "OK", status = "success", statusCode = 200) {
        return { message, status, data, statusCode };
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=baseController.js.map