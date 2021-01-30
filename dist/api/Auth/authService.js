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
exports.AuthService = void 0;
const app_error_1 = require("../../utils/app-error");
class AuthService {
    constructor() {
        /**
         * getUserDetails
         */
        this.getUserDetails = () => __awaiter(this, void 0, void 0, function* () {
            let user = {
                "name": "Taiwo Fayipe",
                "github": "@taiwofayipe",
                "email": "taiwofayipe@gmail.com",
                "mobile": "08139719106",
                "twitter": "@taiwofayipe"
            };
            if (user) {
                return user;
            }
            throw new app_error_1.AppError("Could not fetch user details.");
        });
        /**
         * validateRules
         */
        this.validateRules = (data) => __awaiter(this, void 0, void 0, function* () {
            const condition = data.rule.condition;
            let message;
            let status;
            let result;
            let field = data.rule.field;
            switch (condition) {
                case "gte":
                    field = field.split('.');
                    let count = data.data[field[0]][field[1]];
                    if (count) {
                        if (count >= data.rule.condition_value) {
                            message = `field ${data.rule.field} successfully validated.`;
                            status = "success";
                            result = {
                                data: {
                                    validation: {
                                        error: false,
                                        field: data.rule.field,
                                        field_value: count,
                                        condition: data.rule.condition,
                                        condition_value: data.rule.condition_value
                                    }
                                }
                            };
                        }
                        return { result, message, status };
                    }
                    break;
                case "eq":
                    if (data.data[field]) {
                        if (data.data[field] == data.rule.condition_value) {
                            message = `field ${field} successfully validated.`;
                            status = "success";
                            result = {
                                data: {
                                    validation: {
                                        error: false,
                                        field: `${data.rule.field}`,
                                        field_value: 'd',
                                        condition: "eq",
                                        condition_value: "a"
                                    }
                                }
                            };
                        }
                        else {
                            message = `field ${field} failed validation.`;
                            status = "error";
                            result = {
                                data: {
                                    validation: {
                                        error: true,
                                        field: `${data.rule.field}`,
                                        field_value: 'd',
                                        condition: "eq",
                                        condition_value: "a"
                                    }
                                }
                            };
                        }
                        return { result, message, status };
                    }
                    break;
                case "contains":
                    if (data.data[5]) {
                        if (data.data[5].includes(data.rule.condition_value)) {
                            message = `field ${field} successfully validated.`;
                            status = "success";
                            result = {
                                data: data.data
                            };
                        }
                        else {
                            message = `field ${field} failed validation.`;
                            status = "error";
                            result = {
                                data: data.data
                            };
                        }
                    }
                    else {
                        message = `field ${field} is missing from data.`;
                        status = "error";
                        result = {
                            data: null
                        };
                        return { result, message, status };
                    }
                    break;
                default:
                    throw new app_error_1.AppError("Unknown condition to validate", null, 400);
            }
            throw new app_error_1.AppError("Could not validate rules.");
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=authService.js.map