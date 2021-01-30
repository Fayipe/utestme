"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payloadValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.payloadValidation = joi_1.default.object().keys({
    rule: joi_1.default.object().required(),
    data: joi_1.default.object().required()
});
//# sourceMappingURL=authValidation.js.map