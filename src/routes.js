import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './screens/home/login.js'
import Register from './screens/register/register.js'

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas
