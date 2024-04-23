"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginResponseSchema = exports.UserLoginRequestSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.UserLoginRequestSchema = zod_1.default.object({
    email: zod_1.default.string().email().max(64).min(3),
    password: zod_1.default.string().max(64).min(8),
});
exports.UserLoginResponseSchema = zod_1.default.object({
    access_token: zod_1.default.string(),
});
