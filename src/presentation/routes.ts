import { Router } from "express";



export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router.get('/api/todos', (req, res) => {
            return res.json([
                {id: 1, text: 'Buy Milk', createAt: new Date()},
                {id: 2, text: 'Study Prod', createAt: new Date()},
                {id: 3, text: 'Watch a serie', createAt: new Date()}
            ])
        })

        return router;
    }
}