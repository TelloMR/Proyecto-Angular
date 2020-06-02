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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MotosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const motos = yield database_1.default.query(' SELECT * FROM motos');
            res.json(motos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const motos = yield database_1.default.query('SELECT * FROM motos WHERE id = ?', [id]);
            if (motos.length > 0) {
                return res.json(motos[0]);
            }
            res.status(404).json({ text: 'La moto no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO motos set ?', [req.body]);
            res.json({ message: 'moto guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM motos WHERE id = ?', [id]);
            res.json({ message: 'La moto ha sido eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE motos set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'La moto ha sido actualizada' });
        });
    }
}
const motosController = new MotosController();
exports.default = motosController;
