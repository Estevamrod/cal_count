import { collection, addDoc, query, where, getDocs, or} from 'firebase/firestore'
import {Request, Response, Router} from 'express';
import db from '../db_config/config';

const route = Router();


route.post('/v1/send_contato', async(req:Request, res:Response) => {
    const {name, email, message} = req.body;
    if (!name || !email || !message) return res.status(200).json({'msg':'nao foi possivel concluir a tarefa pois ha dados faltando!'})

    try {
        const collection_ref = collection(db, 'contato');
        const object_sended = await addDoc(collection_ref, {
            username:name,
            email: email,
            message: message
        })
        return res.status(200).json({'msg': 'feedback enviado com sucesso! Agradecemos sua contribuicao com o projeto!', 'object_reference': object_sended.id})
    } catch (e){
        return res.status(201).json({'msg':'ocorreu um erro, por favor tente novamente!', 'error':e})
    }
})

export default route;