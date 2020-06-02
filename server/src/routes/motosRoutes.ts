import {Router} from 'express';

import motosController from '../controllers/motosController'

class MotosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        this.router.get('/', motosController.list);
        this.router.get('/:id', motosController.getOne);
        this.router.post('/', motosController.create);
        this.router.put('/:id', motosController.delete);
        this.router.delete('/:id', motosController.update);
    } 
    

}

const motosRoutes = new MotosRoutes();
export default motosRoutes.router;