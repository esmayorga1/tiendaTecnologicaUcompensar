"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./model/server"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuración de variables de ambiente
dotenv_1.default.config();
console.log;
const server = new server_1.default();
