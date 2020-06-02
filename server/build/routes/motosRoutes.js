"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const motosController_1 = __importDefault(require("../controllers/motosController"));
class MotosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', motosController_1.default.list);
        this.router.get('/:id', motosController_1.default.getOne);
        this.router.post('/', motosController_1.default.create);
        this.router.put('/:id', motosController_1.default.delete);
        this.router.delete('/:id', motosController_1.default.update);
    }
}
const motosRoutes = new MotosRoutes();
exports.default = motosRoutes.router;
