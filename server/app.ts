import express, {Application, Request, Response} from 'express'
import route from './src/middleware/get_data'
import cadastro from './src/middleware/cadastro'

const app:Application = express();
app.use(express.json());

app.get('/', async(req:Request, res:Response) => {
    return res.status(200).json({'msg': 'OK'});
});
app.get('/v1/foodData', route)
app.post('/v1/cadastro', cadastro)
export default app;