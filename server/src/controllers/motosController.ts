import {Request, Response, json} from 'express';

import pool from '../database';

class MotosController {

    public async list (req: Request, res: Response) {
        const motos = await pool.query(' SELECT * FROM motos');
        res.json(motos);
    } 

       public async getOne(req: Request, res: Response): Promise<any>{
        const {id} = req.params;   
        const motos = await pool.query('SELECT * FROM motos WHERE id = ?', [id]);
        if (motos.length > 0) {
            return res.json(motos[0]);
        }
        res.status(404).json({text: 'La moto no existe'});
    }

       public async create (req: Request, res: Response): Promise<void> {
           await pool.query('INSERT INTO motos set ?', [req.body]);
           res.json({message: 'moto guardada'});
       }

       public async delete (req: Request, res: Response): Promise<void> {
           const {id} = req. params;
           await pool.query('DELETE FROM motos WHERE id = ?', [id]);
           res.json({message: 'La moto ha sido eliminada'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req. params;
           await pool.query('UPDATE motos set ? WHERE id = ?', [req.body, id]);
           res.json({message: 'La moto ha sido actualizada'});
    }


    

}

const motosController = new MotosController();
export default motosController;