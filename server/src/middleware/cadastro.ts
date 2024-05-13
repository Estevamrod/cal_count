import { collection, addDoc, query, where, getDocs, or} from 'firebase/firestore'
import {Request, Response, Router} from 'express';
import db from '../db_config/config';
import crypt from '../crypt_config/crypt.config';

const route = Router();

route.post('/v1/cadastro', async(req:Request, res:Response) => {
    const {username, usermail, password} = req.body;
    if (!usermail || !password || !username) return res.status(200).json({msg:'Os dados estão inseridos incorretamente!'});
    
    const hashedPassword = new crypt(password).hash()
    if (!hashedPassword) return res.status(201).json({'msg':'Ocorreu um erro ao tentar criptografar os dados. Por favor tente novamente!'})

    try {
        const collection_ref = collection(db, 'usuario');
        const q = query(collection_ref, 
            or(where('email', '==', usermail),
            where('senha','==', password),
            where('username', '==', username)
        ));
        const query_snapshot = await getDocs(q);
        if (query_snapshot.empty) {
            await addDoc(collection_ref, {
                username: username,
                email: usermail,
                senha: hashedPassword
            });
            return res.status(200).json({msg:"Usuario cadastrado com sucesso!", completed:true});
        }
        return res.status(200).json({'msg':'Não possível completar o cadastro, dados já existentes!', completed:false});
    } catch (e) {
        console.error(e);
        return res.status(201).json({msg:'Não foi possível completar o cadastro. Por favor tente novamente!', completed: false})
    }
})

export default route