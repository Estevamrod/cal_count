import {query, where, collection, getDocs, doc} from 'firebase/firestore'
import db from '../db_config/config'
import {Request, Response, Router} from 'express'
import crypt from '../crypt_config/crypt.config';

const route = Router();

route.post('/v1/login', async(req:Request, res:Response) => {
    const {usermail, password} = req.body;
    if (!usermail || !password) return res.status(201).json({'msg':'Faltando dados ou inseridos incorretamente!'});
    
    const hashedPassword = new crypt(password).hash;
    if (!hashedPassword) return res.status(201).json({'msg':'Ocorreu um erro ao tentar criptografar os dados. Por favor tente novamente!'})
    
    try {
        const reference = collection(db, 'usuario');
        const q = query(reference, where('email', '==', usermail));

        const query_snapshot = await getDocs(q);
        query_snapshot.forEach((doc) => {
            if (doc.exists()) {
                const compare_password = new crypt(password).compare(doc.data()['senha']);
                if (!compare_password) return res.status(200).json({'msg':'Dados inseridos incorretamente! Tente novamente.', 'success':false});
                
                return res.status(200).json({'msg':'Login realizado com sucesso! Bom vê-lo novamente!', 'success':true})
            }
        })

        if (query_snapshot.empty) return res.status(200).json({'msg':'Dados inseridos incorretamente! Tente novamente.', 'success':false});
    } catch (error) {
        console.error(error)
        return res.status(201).json({'msg':'Não possível continuar a tarefa por causa de um erro!'})
    }
});

export default route