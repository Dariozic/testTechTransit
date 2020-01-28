import { Router } from 'express';
import { coursesController } from '../controllers/coursesController';

class IndexRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', coursesController.index);
        this.router.get('/:name', coursesController.findByName);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;