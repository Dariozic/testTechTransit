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
class CoursesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const courses = yield database_1.default.query('SELECT * FROM courses');
                console.log(courses);
                return res.json(courses);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name } = req.params;
            try {
                const courses = yield database_1.default.query(`SELECT * FROM courses WHERE name like '%${name}%'`);
                console.log(courses);
                return res.json(courses);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.coursesController = new CoursesController();
