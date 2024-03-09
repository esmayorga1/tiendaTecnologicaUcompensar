"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = __importDefault(require("../router/product"));
const cors_1 = __importDefault(require("cors"));
const connetion_1 = __importDefault(require("../bd/connetion"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        //this.port = '3005'
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnet();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicación inicializada en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working',
            });
        });
        this.app.use('/api/producto', product_1.default);
    }
    midlewares() {
        // Parseamos el body
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
    async dbConnet() {
        try {
            connetion_1.default.authenticate();
            console.log('Bd conectada');
        }
        catch (error) {
            console.log('Error al conectarse a la bd');
            console.log(error);
        }
    }
}
exports.default = Server;
