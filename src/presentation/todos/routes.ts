import { Router } from "express";
import { TodosController } from "./controllers";


export class TodoRoutes {

    static get routes(): Router {
        const router = Router();
        const todoController = new TodosController()

        router.get('/api/todos', todoController.getTodos );

        return router;
    }
}