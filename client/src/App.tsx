import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './homepage'
import Login from './login'
import Cadastro from './cadastro'


export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/v1/login' element={<Login/>}/>
                <Route path='/v1/cadastro' element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    )
}