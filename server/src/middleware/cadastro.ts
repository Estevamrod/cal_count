import { getFirestore, collection, addDoc} from 'firebase/firestore'
import {Request, Response, Router} from 'express';
import app from '../db_config/config';

const route = Router();
const db = getFirestore(app);

route.post('/v1/cadastro', async(req:Request, res:Response) => {
    const {username, usermail, password} = req.body;
    if (!usermail || !password || !username) return res.status(200).json({msg:'Os dados estão inseridos incorretamente!'});
    try {
        const collection_ref = collection(db, 'usuario');
        await addDoc(collection_ref, {
            username: username,
            email: usermail,
            senha: password
        });
        return res.status(200).json({msg:"Usuario cadastrado com sucesso!", completed:true});
    } catch (e) {
        console.error(e);
        return res.status(201).json({msg:'Não foi possível completar o cadastro. Por favor tente novamente!', completed: false})
    }
})

export default route