import express, {Application, Request, Response} from 'express';
import route from './src/middleware/get_data';
import cadastro from './src/middleware/cadastro';
import login from './src/middleware/login';
import contato from './src/middleware/contato'
import cors from 'cors'

const app:Application = express();

app.use(express.json());
app.use(cors())

app.get('/', async(req:Request, res:Response) => {
    return res.status(200).json({'msg': 'OK'});
});
app.get('/v1/foodData', route);
app.post('/v1/cadastro', cadastro);
app.post('/v1/login', login);
app.post('/v1/send_message', contato);

export default app;