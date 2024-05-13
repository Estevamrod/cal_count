import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

class crypt {
    password: string;
    constructor(password:string) {
        this.password = password;
    }
    hash(){
        try {
            const genSalt = bcrypt.genSaltSync(Number(process.env.saltRounds));
            const hash = bcrypt.hashSync(this.password, genSalt);

            if (hash) {
                return hash;
            }
        } catch(e) {
            console.log(e);
            return {'msg':'Não foi possível completar a função! Tente novamente!', error:e}
        }
    }
    
    compare(db_password: string){
        try {
            const compare_result = bcrypt.compareSync(this.password, db_password);
            if (compare_result) {
                return compare_result
            }
        } catch (e) {
            console.log(e)
            return {'msg':'Não foi possível completar a função. Tente novamente!', error:e};
        }
    }
}

export default crypt;