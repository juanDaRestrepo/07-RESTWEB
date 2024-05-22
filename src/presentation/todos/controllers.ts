import { Request, Response } from "express"


export class TodosController {

    constructor() {

    }

    getTodos = (req: Request, res: Response) => {
        return res.json([
            {id: 1, text: 'Buy Milk', createAt: new Date()},
            {id: 2, text: 'Study Prod', createAt: new Date()},
            {id: 3, text: 'Watch a serie', createAt: new Date()}
        ])
    }
}