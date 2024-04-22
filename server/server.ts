import http from 'http'
import dotenv from 'dotenv'
import cors from 'cors'
import app from './app'
dotenv.config();

const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`OK! running on http://localhost:${PORT}`);
})