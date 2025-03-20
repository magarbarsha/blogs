import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import SinglePage from './pages/SinglePage';
import EditPage from './pages/EditPage';
import Createpage from './pages/Createpage';
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/Login' element={<Login />} />
   <Route path='/Register' element={<Register />} />
   <Route path='/Editpage' element={<EditPage />} />
   <Route path='/Createpage' element={<Createpage />} />
   <Route path='/Singlepage/:id' element={<SinglePage />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App