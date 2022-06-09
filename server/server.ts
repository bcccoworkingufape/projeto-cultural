import express from 'express';
import { createServer } from 'http';

export const app = express();
const server = createServer(app);

server.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
});
