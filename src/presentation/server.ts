import express, { Router } from 'express';
import path from 'path';

interface Options {
    port: number;
    public_path: string;
    routes: Router;
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, routes, public_path = 'public' } = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }

    async start() {

        // Middledwares
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true })); // x-www-form-urlencoded

        // Public Folder
        this.app.use( express.static(this.publicPath));

        this.app.use(this.routes);
        

        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        });

       

        this.app.listen(3000, () => {
            console.log(`Server running on port ${3000}`);
        });
        
    }
}