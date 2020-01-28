"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coursesController_1 = require("../controllers/coursesController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', coursesController_1.coursesController.index);
        this.router.get('/:name', coursesController_1.coursesController.findByName);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
