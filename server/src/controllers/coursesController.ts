import {Request, Response} from 'express';
import db from '../database';

class CoursesController {

    public async index (req: Request, res: Response) {
        try{
            const courses = await db.query('SELECT * FROM courses');
            console.log(courses);

            return res.json(courses);
        }
        catch (error) { 
            console.log(error);
        }
    }

    public async findByName (req: Request, res: Response) {
        let { name } = req.params;
        try{
            const courses = await db.query(`SELECT * FROM courses WHERE name like '%${name}%'`);
            console.log(courses);

            return res.json(courses);
        }
        catch (error) { 
            console.log(error);
        }
    }
}

export const coursesController = new CoursesController();