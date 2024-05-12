import express from 'express';


export class Server {

    private app = express();

    async start() {

        // Middledwares

        // Public Folder
        this.app.use( express.static('public'));

        this.app.listen(8080, () => {
            console.log(`Server running on port ${8080}`);
        })
        
    }
}