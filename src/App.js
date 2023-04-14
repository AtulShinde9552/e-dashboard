import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from './Components/AddProduct'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Product from './Components/Product'
import Profile from './Components/Profile'
import SignUp from './Components/SignUp'
import UpdateComponent from './Components/UpdateComponent'
import PrivateComponent from './Components/PrivateComponent'
import Logout from './Components/Logout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent/>} >
        <Route path='/' element={<Product />}/>
        <Route path='/add' element={<AddProduct />}/>
        <Route path='/logout' element={<Logout />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/update' element={<UpdateComponent />}/>
        </Route>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App