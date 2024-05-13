import express from 'express';
import path from 'path';

interface Options {
    port: number;
    public_path: string;
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly publicPath: string;


    constructor(options: Options) {
        const { port, public_path = 'public' } = options;
        this.port = port;
        this.publicPath = public_path;
    }

    async start() {

        // Middledwares

        // Public Folder
        this.app.use( express.static(this.publicPath));

        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        })

        this.app.listen(8080, () => {
            console.log(`Server running on port ${8080}`);
        })
        
    }
}