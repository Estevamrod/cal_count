import { initializeApp } from "firebase/app";
import dotenv from 'dotenv'
import { getFirestore } from "firebase/firestore";
dotenv.config()

const app = initializeApp({
    apiKey: process.env.db_apiKey,
    authDomain: process.env.db_authDomain,
    projectId: process.env.db_projectId,
    storageBucket: process.env.db_bucket,
    messagingSenderId: process.env.db_senderId,
    appId: process.env.db_AppId
});

const db = getFirestore(app);

export default db;