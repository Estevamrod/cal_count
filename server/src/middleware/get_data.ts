import {Request, Response, Router} from 'express';
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const route = Router();

route.get('/v1/foodData', (req:Request, res:Response) => {
    const {food} = req.body;
    let food_info:{[key:string | number]:any} = {};
    if (!food) return res.status(200).json({'msg':'Please, insert a valid food name!', end:true});
    return new Promise<object>(async(resolve, reject) => {
        try{
            const req = await axios.get(`https://caloriasporalimentoapi.herokuapp.com/api/calorias/?descricao=${food}`);
            for (let i in req.data) {
                food_info[i] = {
                    porcao: req.data[i].quantidade,
                    calorias: req.data[i].calorias,
                    status_code: req.status
                }
            }
            resolve(res.status(200).json({msg: 'returning...', content:{
                food_name:food,
                food_info
            }}));
        }catch(error) {
            reject(error)
        }
    });
});

export default route